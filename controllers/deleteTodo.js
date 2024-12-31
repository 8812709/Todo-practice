const todo=require("../models/Todo")


exports.deleteTodoById=async(req,res)=>{
    const {id}=req.params
    try{
        const deletedInfo=await todo.findByIdAndDelete({_id:id})
        if(!deletedInfo){
            return res.status(404).json({message:"No todo found with this id"})
        }
        res.status(200).json({
            success:true,
            data:deletedInfo,
            message:`The item with ${id} has been deleted`
        })
    }
    catch(e)
    {
        console.error(e);
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
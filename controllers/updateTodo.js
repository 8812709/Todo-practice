const todo=require('../models/Todo')

exports.updateTodoById=async(req,res)=>{
    try{
        const {id}=req.params
        const{title,description}=req.body
        const updatedInfo=await todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()}
        
        )
        //if id is not found 
        if(!updatedInfo){
            return res.status(404).json({
                success:false,
                data:"no data found related with id"
            })
        }
        //if we found the id
        res.status(200).json({
            success:true,
            data:updatedInfo,
            message:`updated successfully at the id:${id}`
        })
    }
    catch(e){
        console.error(e)
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
}
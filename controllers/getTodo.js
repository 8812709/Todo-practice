//importing the structure of the db from models 
const todo=require('../models/Todo')
//defining the function to get all the data on get api call
exports.getTodo=async(req,res)=>{
    try{
        const todoInfo=await todo.find({})
        res.status(200).json({
            success:true,
            data:todoInfo,
            message:"All the data are fetched successfully"
        })
    }
    catch(error)
    {
        console.log("some error occured while fetching the data from db",error)
        console.error(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
    })
}
}

//another function for fetching details on basis of id ,here id is send in form of request into the server
exports.getTodoById=async(req,res)=>{
    try{
        //extract id from request parameter using params
        const id=req.params.id
        //logic of getting the id and giving response
        const getIdInfo=await todo.findById({_id:id}) //here _id is used beacause it is mentioned in the database json format
        
        //this is when id is not found
        if(!getIdInfo)
        {
            return res.status(404).json({
                success:false,
                message:"id not found in the database"
            })
        }
        //when id is found
        res.status(200).json({
            success:true,
            data:getIdInfo,
            message:`The data is found with id:${id}` 
        })
    }
    catch(err)
    {
        console.error(err)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }
}
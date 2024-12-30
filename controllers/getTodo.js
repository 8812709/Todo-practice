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
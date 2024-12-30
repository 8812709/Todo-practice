//at first we will import the model here by creating a instance
const todo=require('../models/Todo')

//define the route handler
//defining the function to create a to do in the db
exports.createTodo=async(req,res)=>{
    try{
        //to fetch the title and discription from the request body
        const {title,description}=req.body
        //to create a todo in the db
        const response=await todo.create({title,description})
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"The Todo is created in the db"

            }
        )

    }
    catch(error)
    {
        console.error(error)
        console.log("some error occured",error)
        res.status(500).json(
        {
            success:false
            ,message:"internal server error"
        }
        )
    }
}
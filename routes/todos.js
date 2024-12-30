//creating routes of todocreate
const express=require('express')
const router=express.Router()

//import the controller of createTodo from controllers
const {createTodo}=require('../controllers/createTodo')



//define api routes and mapping it with the createtodo logic
router.post("/createTodo",createTodo)
module.exports=router;
//creating routes of todocreate
const express=require('express')
const router=express.Router()

//import the controller of createTodo from controllers
const {createTodo}=require('../controllers/createtodo')
const{getTodo,getTodoById}=require('../controllers/getTodo')
const{updateTodoById}=require("../controllers/updateTodo")
const{deleteTodoById}=require("../controllers/deleteTodo")



//define api routes and mapping it with the createtodo logic
router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
router.get("/getTodoById/:id",getTodoById)
router.put("/updateTodoById/:id",updateTodoById)
router.delete("/deleteTodoById/:id",deleteTodoById)


module.exports=router;
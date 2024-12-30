//creating routes of todocreate
const express=require('express')
const router=express.Router()

//import the controller of createTodo from controllers
const {createTodo}=require('../controllers/createTodo')
const{getTodo}=require('../controllers/getTodo')



//define api routes and mapping it with the createtodo logic
router.post("/createTodo",createTodo)
router.get("/getTodo",getTodo)
module.exports=router;
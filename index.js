const express=require('express')
const app=express()

//importing the dotenv here
require('dotenv').config()

//middleware to parse json file
app.use(express.json())

//making the server online
app.listen(process.env.PORT || 4000,()=>{
    console.log(`server is started successfully at ${process.env.PORT}`)
})

//importing todoroutes here
const todoRoutes=require("./routes/todos")
//mount the api routes
app.use("/api/v1",todoRoutes)

//connect to the db
const dbconnect=require('./config/database')
dbconnect()

app.get('/',(req,res)=>{
    res.send(`<h1>this is homepage</h1>`)
})

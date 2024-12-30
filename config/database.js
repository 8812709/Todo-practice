//declaring the instance of mongoose which help in connecting the server and db
const mongoose=require('mongoose')
//install the dotenv and then create a instance of it 
require('dotenv').config()

//now i have to create a function to connect the database and server using mongoose 
//importing the database_url from the .env using using process.env where process is the object which contains all the things declared in the env
const dbconnect=(()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("database connected successfully")})
    .catch((error)=>{
        console.log("some error occured while connecting")
        process.exit()
    })
    
})

module.exports=dbconnect



const express = require("express")
const collection = require("./config/dbConnect")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.get("/signin",cors(),(req,res)=>{

})


app.post("/signin",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email, password:password})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{firstname,lastname,email,password}=req.body

    const data={
      firstname: firstname,
      lastname: lastname,
      email:email,
      password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})


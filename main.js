const express=require("express");
const app=express();

app.get("/",(req,res)=>{

    res.json({
        message:"Success"
    })
})


app.listen(8080,()=>{
    console.log("Server Running ");
})
const express=require('express');
const app=express();
const port=5000;
app.get("/",(req,res)=>{
    res.send("hello world ");
});

app.get("/root",(req,res)=>{
    res.send("this is root page")
})

app.listen(port,()=>{
    console.log(`my first server running on the port :${port}`);
})
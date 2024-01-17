var express=require("express");
const app=express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
app.get("/info",(req,res)=>{
    res.send("we are available from 9h to 17h")
})


app.listen(4000,()=>{
    console.log("server is running")
})

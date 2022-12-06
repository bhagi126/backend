const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registerSchema.js")
const port=2000;
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://bhagyalakshmi:bhagyalakshmi@cluster0.ku4pl9s.mongodb.net/1stdb?retryWrites=true&w=majority")
.then(()=>{
	console.log("connection established")
})
.catch((err)=>{
	console.log(err)
})

app.get("/",(req,res)=>{
	res.send("dummy root rout")
})
 app.post("/register",(req,res)=>{
 	//const {email,passcode}=req.body;
 	const email="user1@gmail.com",passcode="1234"
 	const newFrontendUser=new Register({
 		username:email,
 		password:passcode
 	})
 	newFrontendUser.save()
 })

app.listen(port,()=>console.log("server is running"))

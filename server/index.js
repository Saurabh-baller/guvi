import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
//morgan is a middleware it will help us to console http request in console
import dotenv from "dotenv"
import userRouter from "./routes/user.js";



 const app = express();
 dotenv.config();

app.use(morgan("dev"));
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.use("/users", userRouter); // http://localhost.5000/users/signup

//username:msaurabh0007
// paswword: WWQ8oSX1kvqzWow5
// mongodb+srv://msaurabh0007:<password>@cluster0.pfplnat.mongodb.net/?retryWrites=true&w=majority



const port = process.env.PORT || 5000;


 mongoose
  .connect(process.env.MONGODB_URL)
  .then(()=> {
   app.listen(port,() => console.log(`Server running on port ${port}`))
 })
 .catch((error) => console.log(`$${error} did not connect`))
//Saurabh_baller
 // v54DKkWMpNTMDo3P

 //mongodb+srv://Saurabh_baller:<password>@cluster0.7sqiyp4.mongodb.net/?retryWrites=true&w=majority
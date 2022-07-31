import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser";
import connection  from "./databases/db.js";
import router from "./Routes/route.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use("/", router)


const Port=process.env.Port||5000;
connection();
app.listen(Port, ()=>{
   console.log("Server is runnig on ",Port)
})
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connection =async()=>{
    const Username=process.env.DB_Username;
    const password=process.env.DB_Password;
    const URL=`mongodb+srv://${Username}:${password}@cluster0.2jssa6l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL)
        console.log("db connected successfully");
    }
    catch(error){
        console.log("error while connecting the database",error);
    }
}

export default connection;
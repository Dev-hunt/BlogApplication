import express from 'express';
import connection from './database/db.js';

const app=express();
const PORT =8000;
app.listen(PORT,()=>{console.log(`Server is runnning successfully on ${PORT}`)})
connection();
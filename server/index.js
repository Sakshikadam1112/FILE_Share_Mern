import express from 'express';
import router from './routing/route.js';
import cors from 'cors';
import Dbconnection from './database/db.js';

const app=express();

app.use(cors());
app.use('/',router);

const Port = 8000;

Dbconnection();


app.listen(Port,()=>console.log(`Server is running on port ${Port}`))
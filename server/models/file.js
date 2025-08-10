//this is done for validaton by schema

import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    path:{
        type : String,
        required : true
    },
    name:{
        type : String,
        required : true
    },
    downloadContent:{
        type:Number,
        required:true,
        default : 0
    }
})

const File = mongoose.model('file',fileSchema);//it saves everything in da coction called file

export  default File;
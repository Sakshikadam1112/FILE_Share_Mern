import mongoose from "mongoose";

const Dbconnection = async ()=>{
const Mongo_URl=`mongodb+srv://rakshit123:rakshit123@rakshitcluster.dqxariv.mongodb.net/?retryWrites=true&w=majority&appName=Rakshitcluster`;
try{
   await mongoose.connect(Mongo_URl);
    console.log("Database connected successfuly");
}catch(error){
    console.error("error while connecting to database",error.message);
}

}

export default Dbconnection;
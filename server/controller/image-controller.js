import File from "../models/file.js";

export const uploadImage= async (request,response)=>{
    const fileObj = {
        path: request.file.path,
        name:request.file.originalname
    }
    console.log(request);
    try {
        const file = await File.create(fileObj);
        response.status(200).json({path : `http://localhost:8000/file/${file._id}`})
    } catch (error) {
        console.error(error.message);
    }
}

export const downloadImage = async (request,response)=>{
    try{
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        await file.save();
        //this is a mongodb function used to click
        response.download(file.path,file.name);
    }catch(error){
        console.error(error.message);
        return response.status(200).json({error:error.message});
    }
}
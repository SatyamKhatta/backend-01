import {v2 as cloudinary} from "cloudinary"
import fs, { unlink } from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});

const uploadOnCloudinary = async (localFilePath) =>{
    try{
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response=await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // if file uploaded succe.. then console..
        console.log("file is uploaded on cloudinary",response.url)
        return response
    }catch(err){
         fs.unlinkSync(localFilePath)    // thhis will remove local saved temp... file as upload operation got failed

         return null
    }
}

export {uploadOnCloudinary}
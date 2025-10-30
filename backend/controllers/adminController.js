import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudanary} from "cloudinary"
import doctorModel from "../models/doctorsModel"

// api for adding the doctors

const addDoctor = async ()=>{

    try {
        const {name,email,password,spciality,degree,experience,about,fees} =req.body
        const imageFile = req.file
        console.log({name,email,password,spciality,degree,experience,about,fees},imageFile);

        //checking for all data to add doctors
        if(!name || !email || !password || !spciality || !degree || !experience || !about || fees){
            return res.json({success:false, message:"Missing Details"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a vaild email"})
        }

        //vaidating the strong password
        if(password.length < 8) {
            return res.json({success:false, message:"Please enter a strong password"})

        }

        // hasing the doctors password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        // upload image to cloudanary
        const imageUpload = await cloudanary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageURL = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image:imageURL,
            password:hashedPassword,
            spciality,
            degree,
            experience,
            about,
            Date:Date.now()
        }
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success : true , message:"Doctor added"})



    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
        
    }
}
export {addDoctor}
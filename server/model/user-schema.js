import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
        trim: true,
        min: 5,
        max: 25,
    },
    email: {

        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

})

const user= mongoose.model('user', userSchema)
export default user;
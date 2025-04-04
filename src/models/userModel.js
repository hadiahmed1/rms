import mongoose from "mongoose";
const userSchema= mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    role:{
        type: String,
        default:"user",
        enum:['user','volunteer','coordinator','admin'],
        required:true
    }
});
const User = mongoose.model("user",userSchema);
export default User;
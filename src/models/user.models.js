import mongoose ,{Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema(
    {
        username:{
            type:String,
            required:true,
            unique : true,
            lowercase:true,
            trim:true,
            index:true,
        },
        email:{
            type:String,
            required:true,
            unique : true,
            lowercase:true,
            trim:true,
        },
        fullname:{
            type:String,
            required:true,
            unique : true,
            trim:true,
        },
        avatar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        password:{
            type: String,
            required:[true, 'passowrd is required']
        },
        refreshToken:{
            type:String,
        }
    },{
        timestamps:true
    }

)
//   in this we use pre hook and bcrypt pacakage for hash password before saving in database
userSchema.pre("save",async function(next){
    if (this.isModified("password")) {  // run this only when the password is modified
        this.password=bcrypt.hash(this.password,10)
        next()
    }

})
    
userSchema.methods.isPasswordCorrect=async function(password) {
    return await bcrypt.compare(password, this.password)
 }

 userSchema.methods.generateAccessToken=function(){
   return   jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname   //(this.fullname is coming from db  )
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }
 userSchema.methods.generateRefreshToken=function(){
    return   jwt.sign(
        {
            _id:this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
 }
 


export const User = mongoose.model("User",userSchema)

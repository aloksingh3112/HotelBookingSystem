const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String},
  mobile:{type:Number},
  dateofbirth:{type:Date},
  address:{type:String},
  photo:{type:String},
  role:{type:String,default:"USER"},
  mybooking:[{type:mongoose.Schema.Types.ObjectId,ref:'BookingSchema'}]
});

module.exports=mongoose.model('UserModel',UserSchema)

const mongoose = require('mongoose');

const AdminSchema=new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String},
  mobile:{type:Number},
  dateofbirth:{type:Date},
  address:{type:String},
  city:{type:String},
  state:{type:String},
  photo:{type:String},
  role:{type:String},
  room:[{type:mongoose.Schema.Types.ObjectId,ref:'RoomModel'}],
  category:[{type:mongoose.Schema.Types.ObjectId,ref:'CategoryModel'}],
  facility:[{type:mongoose.Schema.Types.ObjectId,ref:'FacilityModel'}]

})


module.exports=mongoose.model('AdminModel',AdminSchema)

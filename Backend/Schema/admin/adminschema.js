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
  role:{type:String,default:"ADMIN"},
  room:[{type:mongoose.Schema.Types.ObjectId,ref:'RoomModel'}],
  roomcategory:[{type:mongoose.Schema.Types.ObjectId,ref:'RoomCategoryModel'}],
  roomfacility:[{type:mongoose.Schema.Types.ObjectId,ref:'RoomFacilityModel'}]

})


module.exports=mongoose.model('AdminModel',AdminSchema)

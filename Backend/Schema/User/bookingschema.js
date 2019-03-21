const mongoose=require('mongoose');

const BookingSchema=new mongoose.Schema({
  room:{type:mongoose.Schema.Types.ObjectId,ref:'RoomModel'},
  fromdate:{type:Date},
  todate:Date,
  noofpersons:Number,
  noofchilds:Number,
  name:String,
  mobile:Number,
  email:Number,

});

module.exports=mongoose.model('BookingModel',BookingSchema)

const mongoose=require('mongoose');

const RoomSchema=new mongoose.Schema({
  roomtype:{type:String},
  roomtitle:{type:String},
  roomfacility:{type:String},
  noofbeds:{type:String},
  maxadults:{type:Number},
  maxchilds:{type:Number},
  roomfare:{type:Number},
  roomimage:{type:String},
  roomdescription:{type:String}

})

module.exports=mongoose.model('RoomModel',RoomSchema)

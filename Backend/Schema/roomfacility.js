const mongoose=require('mongoose');

const RoomFacilitySchema=mongoose.Schema({
  roomfacility:[{type:String}]
})

module.exports=mongoose.Model('RoomCategoryModel',RoomFacilitySchema)

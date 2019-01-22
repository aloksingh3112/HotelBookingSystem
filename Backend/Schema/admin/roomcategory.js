const mongoose=require('mongoose');
const RoomCategorySchema=mongoose.Schema({
  roomcategory:{type:String}
})

module.exports=mongoose.model('RoomCategoryModel',RoomCategorySchema)

const mongoose=require('mongoose');
const RoomCategorySchema=mongoose.Schema({
  roomcategory:{type:String}
})

module.export=mongoose.model('RoomCategoryModel',RoomCategorySchema)

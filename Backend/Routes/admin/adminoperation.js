const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const AdminModel = require('../../Schema/admin/adminschema');
const RoomModel = require('../../Schema/admin/roomschema');
const RoomFacilityModel = require('../../Schema/admin/roomfacility');
const RoomCategoryModel = require('../../Schema/admin/roomcategory');


/** Add Room*/

router.post('/addroom', async (req, res) => {

  const room = new RoomModel({
    roomtype: req.body.roomtype,
    roomtitle: req.body.roomtitle,
    roomnumber: req.body.roomnumber,
    roomfacility: [...req.body.roomfacility],
    noofbeds: req.body.noofbeds,
    maxadults: req.body.maxadults,
    maxchilds: req.body.maxchilds,
    roomfare: req.body.roomfare,
    roomimage: req.body.roomimage,
    roomdescription: req.body.roomdescription
  })

  try {
    const admin = await AdminModel.findOne({});
    admin.room.push(room);
    const result = await room.save();
    try {
      const savedata = await admin.save();
      return res.status(200).json({
        message: "add succssfully",
        data: savedata
      })

    } catch (error) {
      return res.status(501).json({
        message: "something went wrong",
        err: err
      })

    }



  } catch (error) {
    res.status(501).json({
      message: "failed",
      err: err
    })

  }

})

/** Get Room*/

router.get('/getroom', async (req, res) => {
  try {
    const data = await AdminModel.findOne({}).populate('room');
    console.log(data);
    const roomarray = data.room;
    return res.status(200).json({
      message: "success",
      data: roomarray
    })


  } catch (err) {
    res.status(501).json({
      message: "something went wrong",
      err: err

    })

  }


})


router.delete('/roomdelete/:id', async (req, res) => {
  console.log(req.params.id)
  try {
  const admin= await AdminModel.findOne({});
  const index=admin.room.indexOf(req.params.id) ;
  console.log(index);
   admin.room.splice(index,1);
   const result = await admin.save();
   try {
    const deleteRoom=await RoomModel.findByIdAndDelete({_id:req.params.id});
    return res.status(200).json({
      message :"deleted successfully",
      data:deleteRoom
    })
   } catch (error) {
      return res.status(201).json({
        message:"Not deleted",
        err:error
      })
   }
}
catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      err:error
    })
  }
});

router.put('/editroom/:id',async (req,res)=>{
  try {
    const room=await RoomModel.findById({_id:req.params.id});
    room.roomtype=req.body.roomtype,
    room.roomtitle= req.body.roomtitle,
    room.roomnumber= req.body.roomnumber,
    room.roomfacility= [...req.body.roomfacility],
    room.noofbeds= req.body.noofbeds,
    room.maxadults= req.body.maxadults,
    room.maxchilds= req.body.maxchilds,
    room.roomfare= req.body.roomfare,
    room.roomimage= req.body.roomimage,
    room.roomdescription= req.body.roomdescription
    try {
      const saveroom=await room.save();
       return res.status(200).json({
         message:"Edit succusfully",
         data:saveroom
       })

    } catch (error) {
      return res.status(201).json({
        message:"edit unsucussful",
        err:error
      })

    }

  } catch (error) {
    res.status(501).json({
      message:"something went wrong",
      error:error
    })

  }

})


// room category route
router.post('/addcategory',async (req,res)=>{
  console.log(req.body);

   const roomCategory=new RoomCategoryModel({
    roomcategory:req.body.roomcategory
   })

   try{


    const admin=await AdminModel.findOne({});
    console.log(admin);
    admin.roomcategory.push(roomCategory);
    const result=await admin.save();
    const category=await roomCategory.save();
    console.log(category);

    return res.status(200).json({
      message:"added successfully",
      data:category
    })
  }
  catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      error:error
    })

  }

})


router.get('/getcategory',async (req,res)=>{

  try {
   const roomcategory=await AdminModel.findOne({}).populate('roomcategory');
   return res.status(200).json({
     message:"success",
     data:roomcategory
   })


  } catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      err:error
    })

  }


})



module.exports = router;

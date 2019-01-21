const express = require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const AdminModel = require('../../Schema/admin/adminschema');
const RoomModel=require('../../Schema/admin/roomschema');
const RoomFacilityModel=require('../../Schema/admin/roomfacility');
const RoomCategoryModel=require('../../Schema/admin/roomcategory');


/** Add Room*/

router.post('/addroom',async (req,res)=>{

   const room=new RoomModel({
       roomtype:req.body.roomtype,
       roomtitle:req.body.roomtitle,
       roomnumber:req.body.roomnumber,
       roomfacility:[...req.body.roomfacility],
       noofbeds:req.body.noofbeds,
       maxadults:req.body.maxadults,
       maxchilds:req.body.maxchilds,
       roomfare:req.body.roomfare,
       roomimage:req.body.roomimage,
       roomdescription:req.body.roomdescription
   })

   try {
     const admin=await AdminModel.findOne({});
     admin.room.push(room);
     const result=await room.save();
     try {
      const savedata=await admin.save();
      return res.status(200).json({
         message:"add succssfully",
         data:savedata
      })

     } catch (error) {
      return res.status(501).json({
         message:"something went wrong",
         err:err
      })

     }



   } catch (error) {
     res.status(501).json({
       message:"failed",
       err:err
     })

   }

})

/** Get Room*/

router.get('/getroom',async (req,res)=>{
  try {
    const data=await AdminModel.findOne({}).populate('room');
    console.log(data);
    const roomarray=data.room;
    return res.status(200).json({
      message:"success",
      data:roomarray
    })


  } catch (err) {
    res.status(501).json({
      message:"something went wrong",
      err:err

    })

  }


})




module.exports=router;
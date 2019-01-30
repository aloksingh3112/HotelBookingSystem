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


router.delete('/deletecategory/:id',async (req,res)=>{
  const id =req.params.id;
  try {
    const categorydelete=await RoomCategoryModel.findOneAndDelete({_id:id});
    if(categorydelete){
      const admin=await AdminModel.findOne({}).populate('roomcategory');
      const index=admin.roomcategory.indexOf(id);
       admin.roomcategory.splice(index,1);
       const roomcategorysave=await admin.save();
       return res.status(200).json({
         message:"success",
         data:roomcategorysave

       })

    }
 } catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      err:error
    })

  }

})

router.put('/updatecategory/:id',async (req,res)=>{
  try {
    const id=req.params.id;
    const category=await RoomCategoryModel.findByIdAndUpdate({_id:id},{
      $set:req.body
    },{new:true})
    if(category){
       return res.status(200).json({
         message:"succuss",
         data:category
       })
    }
    else{
      return res.status(404).json({
        message:"category not found"
      })
    }

  } catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      error:error
    })

  }



})


// room facility route

router.post('/addfacility',async (req,res)=>{
  try {
    const facility=new RoomFacilityModel({
      roomfacility:req.body.roomfacility
    });
    const facilityresult=await facility.save();
    const adminroomfacility=await AdminModel.findOne({});

    adminroomfacility.roomfacility.push(facilityresult);

      const roomfacilityresult=await adminroomfacility.save();


      return res.status(200).json({
        message:"succussfully added",
        data:facilityresult
      })







  } catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      error:error
    })

  }



})




module.exports = router;

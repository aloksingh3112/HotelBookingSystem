const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const bcrypt=require('bcryptjs');
const AdminModel=require('../../Schema/admin/adminschema');

router.post('/signup',async (req,res)=>{
  console.log(req.body);


   try {
      const email=await AdminModel.findOne({
        email:req.body.email
      });

      if(email){
       return res.status(200).json({
          message:"email already existe"
        })
      }
      const admin=new AdminModel({
           name:req.body.name,
           email:req.body.email,
           password:bcrypt.hashSync(req.body.password,10),
           mobile:req.body.mobile,
           dateofbirth:req.body.dateofbirth,
           address:req.body.address,
           city:req.body.city,
           state:req.body.city,
           country:req.body.country,
           photo:req.body.photo,
           role:"ADMIN",

      });
      try{
      const saveadmin=await admin.save();

      res.status(200).json({
        message:"register succesfully",
        user:saveadmin
      })
      }
      catch(err){
        res.status(500).json({
          message:"signup failed"
        })

      }


   }
   catch(err){
      res.status(500).json({
        message:"signup fail"
      })
   }





})

module.exports=router;

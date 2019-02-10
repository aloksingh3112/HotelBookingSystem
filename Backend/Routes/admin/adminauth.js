const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const AdminModel = require('../../Schema/admin/adminschema');

router.post('/signup', async (req, res) => {
  console.log(req.headers);


  try {
    const email = await AdminModel.findOne({
      email: req.body.email
    });

    if (email) {
      return res.status(201).json({
        message: "email already exist",
        isRegister:false
      })
    }
    const admin = new AdminModel({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      mobile: req.body.mobile,
      dateofbirth: req.body.dateofbirth,
      address: req.body.address,
      photo: req.body.photo,
      role: "ADMIN",

    });
    try {
      const saveadmin = await admin.save();

      res.status(200).json({
        message: "register succesfully",
        user: saveadmin,
        isRegister:true
      })
    } catch (err) {
      res.status(500).json({
        message: "signup failed"
      })

    }


  } catch (err) {
    res.status(500).json({
      message: "signup fail"
    })
  }

})



router.post('/login',async (req,res)=>{
  console.log(req.body);

   try {
     const admin=await AdminModel.findOne({
        email:req.body.email
     })

     if(!admin){
       return res.status(402).json({
           message:"wrong credientials"
       })
     }

     const passcomp=bcrypt.compareSync(req.body.password,admin.password);
     if(!passcomp){
      return res.status(402).json({
          message:"wrong credientials"
      })
    }

      res.status(200).json({
        message:"login success fully",
        user:admin
      })


   } catch (error) {
     res.status(501).json({
       message:"something went wrong",
       err:err
     })

   }


})

module.exports = router;

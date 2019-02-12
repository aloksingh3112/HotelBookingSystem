const express=require('express');
const jwt=require('jsonwebtoken');
const AdminModel=require('../Schema/admin/adminschema');

module.exports=async function(req,res,next){

  const decode=jwt.decode(req.headers.auth);
  try {
    const user=await AdminModel.findOne({email:decode.user.email})

  if(user.role==decode.user.role){
    next()
  }
  else{
    return res.status(403).json({
      message:"You are not authorised "
    })
  }

  } catch (error) {
    res.status(501).json({
      message:error
    })

  }




}

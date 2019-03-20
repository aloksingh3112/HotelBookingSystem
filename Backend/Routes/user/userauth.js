const express=require('express');
const bcrypt=require('bcryptjs');
const UserModel=require('../../Schema/User/userschema');
const router=express.Router();

router.post('/signup',async (req,res)=>{
  try {
    const isEmail=await UserModel.findOne({email:req.body.email});
    if(isEmail){
     return res.status(409).json({
        message:'Email already Exist'
      })
    }
    const userModel=new UserModel({
       name:req.body.name,
       email:req.body.email,
       password:bcrypt.hashSync(req.body.password,10),
       mobile:req.body.mobile,
       dateofbirth:req.body.dateofbirth,
       address:req.body.address,
       photo:req.body.photo,
      })

      const user=await userModel.save();
      return res.status(200).json({
        message:"Register Successfully",
        data:user
      })

  } catch (error) {
    return res.status(501).json({
      message:"something went wrong",
      err:error
    })

  }


})



router.post('/login',async (req,res)=>{
  console.log("enter",req.body)
  try {

    const user=await UserModel.findOne({email:req.body.email});
    if(!user){
      return res.status(404).json({
        message:'Not Registered'
      })
    }
const isValid=bcrypt.compareSync(req.body.password,user.password);

if(!isValid){
  return res.status(401).json({
    message:"wrong Credential",

  })
}
return res.status(200).json({
  message:"login Sucessfully",
  data:user
})

  } catch (error) {
    res.status(501).json({
      message:'something went wrong',
      err:error
    })

  }


})
 module.exports=router;


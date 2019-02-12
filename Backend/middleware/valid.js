const jwt=require('jsonwebtoken');

module.exports=async function (req,res,next) {
  jwt.verify(req.headers.auth,'aloksingh',function(err,decode){
    if(err){
      return res.status(401).json({
        message:"You are not authenticate",
        err:err
      })
    }else{
      next();
    }
  })

}

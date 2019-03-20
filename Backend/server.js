const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const http=require('http');
const app=express();
const mongoose=require('mongoose');

const adminRoute=require('./Routes/admin/adminauth');
const adminOperation=require('./Routes/admin/adminoperation');
const userRoute=require('./Routes/user/userauth');

//connection
mongoose.connect('mongodb://localhost:27017/hotelmanagement',{useNewUrlParser:true})
       .then((res)=>console.log("connection established"))
       .catch((err)=>console.log("error"))


// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'dist')))

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Auth');
  res.setHeader('Access-Control-Allow-Methods', 'POST,PUT, GET, PATCH, DELETE, OPTIONS');
  next();
});


app.use('/admin',adminRoute);
app.use('/adminoperation',adminOperation);
app.use('/user',userRoute);


// Server
const port= process.env.port||'3000';
app.set('port',port);

const server= http.createServer(app);
server.listen(port,()=>{
  console.log('connected to server'+port)
})





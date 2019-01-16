const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const http=require('http');
const app=express();
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeAngular',{useNewUrlParser:true})
       .then((res)=>console.log("connection established"))
       .catch((err)=>console.log("error"))

app.use(bodyParser.urlencoded({extended:false}))


app.use(express.static(path.join(__dirname,'dist')))



const port= process.env.port||'3000';
app.set('port',port);
app.get('*',(req,res)=>{
 res.status('404').json({
   error:'not found'
 })

})

const server= http.createServer(app);

server.listen(port,()=>{
  console.log('connected to server'+port)
})





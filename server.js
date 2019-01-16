const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const http=require('http');
const app=express();

app.use(bodyParser.json());
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





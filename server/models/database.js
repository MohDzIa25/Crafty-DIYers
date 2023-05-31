const mongoose = require('mongoose');

const connect= async()=>{
 try{
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("db connected");
 }
 catch(err){
  console.log(err+" error in connection db");
 }
}
connect();
// Models
require('./Category');
require('./Craft'); 
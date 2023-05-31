const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(process.env.MONGODB_URI).then(() => {
//   console.log("connection succesful");
// }).catch((err) => {
//   console.log("NO Connection"+ err);
// });
// console.log(process.env.MONGODB_URI);
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });
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
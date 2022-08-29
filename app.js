const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req,res){
   var today = new Date();
   if(today.getDay()===2){
    res.send("WEEKEND!!");
   }else{
    res.send("SORRY :(");
   }
});


app.listen(3000, function () {  
    console.log("server has started 3000");
});
var express = require("express");
var index =   express();

index.set("view engine","ejs");
index.use(express.static(__dirname + "/public"));


//Add a new address using form
index.get("/Address/new",function(req,res){
    res.render("new");
});


//POST ROUTE
index.post("/Address",function(req,res){
res.send("THIS IS THE POST ROUTE!");    
});

index.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is listening");
});

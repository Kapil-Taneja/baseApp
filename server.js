var express = require("express");
var app = express();

app.get("/",function(req, res){
    res.send("test app");
})

app.listen(process.env.PORT || 4200);
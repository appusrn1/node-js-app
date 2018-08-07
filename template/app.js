var express = require("express");
var app = express();
var movies = require("./movies.js");

//ser view engine
app.set("view engine", "jade");

var obj={name:"Appaji",
         age:"46",
         profession:'cowboy'}

var arry = [{name:"Viky" , age:24} , {name:"Ranjit", age:19}]


app.get('/' , function (req, res){
    res.render('test1',{details:arry});
});

app.use('/movies', movies);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app running at ", host, port);
});
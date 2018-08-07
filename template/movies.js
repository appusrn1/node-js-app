var express =require("express");
var router=express.Router();

var movies = [
    {id:101, name: "Flight club" },
    {id:102, name: "Angry Men"}
]

router.get('/:id', function(req,res){
    console.log(req.params.id);
    //if req.params
})

router.get('/', function(req,res){
    res.json(movies);
})
module.exports=router;


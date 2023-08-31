var express = require("express");
var router = express.Router();
var {MongoClient} = require("mongodb");
var bcrypt = require("bcrypt");
var saltRounds = 10;


data = {}
var mongoclient = new MongoClient("mongodb://127.0.0.1:27017");
router.get("/",(req,res)=>{
    // console.log(req.query);
    var userdata=req.query;
    bcrypt.hash(userdata.password, saltRounds, function(err, encryptedpwd){
        userdata.password = encryptedpwd;
        getdbconnection(req.query).then((response)=>{
            data.msg = "Done";
            res.send(JSON.stringify(data));
        })
    });
})

async function getdbconnection(userdata){
    await mongoclient.connect();
    var db = mongoclient.db("online_shopping_app");
    var collection = db.collection("signupdetails");
    var result = collection.insertOne(userdata,(error)=>{
        return "Done";
    });
}

module.exports = router;
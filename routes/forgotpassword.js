var express = require("express")
var router = express.Router();
var {MongoClient} = require("mongodb")

var mongoclient = new MongoClient("mongodb://127.0.0.1:27017");

var data = {};
router.get("/",(req,res)=>{
    getdbconnection(req.query).then((response)=>{
        if(response.length==1){
            data.msg = "Valid user";
        }else{
            data.msg = "Invalid user";
        }
    })
    .catch((error)=>{
        console.log(error);
    })
    res.send(JSON.stringify(data));
})

async function getdbconnection(userdata){
    await mongoclient.connect();
    var db = mongoclient.db("online_shopping_app");
    var collection = db.collection("signupdetails");
    var result = collection.find({email : userdata.email}).toArray();
    return result;
}

module.exports = router;
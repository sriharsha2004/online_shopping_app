var express = require("express");
var router = express.Router();
var {MongoClient} = require("mongodb");

var mongo = new MongoClient("mongodb://127.0.0.1:27017");
router.get("/",(req,res)=>{
    var d = {};
    var data = req.query;
    getdbconnection(data).then((response)=>{
        if(response.data == "done"){
            res.send(JSON.stringify(d));
        }
    })
    .catch((error)=>{
        console.log(error);
    })
})

async function getdbconnection(data){
    await mongo.connect();
    var db = mongo.db("online_shopping_app");
    var collection = db.collection("product_details");
    var result = collection.insertOne(data,(error)=>{
        return "done";
    });
}
module.exports = router;
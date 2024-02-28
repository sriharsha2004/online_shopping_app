var express = require("express");
var router = express.Router();
var {MongoClient} = require("mongodb");

var mongoclient = new MongoClient("mongodb://127.0.0.1:27017");
router.get("/",(req,res)=>{

    getdbconnection(req.query).then((response)=>{
        // console.log(response);
        res.send(response);
        // res.send(JSON.stringify(response));
    })
    .catch((error)=>{
        console.log(error);
    }) 
})

async function getdbconnection(productdata) {
    await mongoclient.connect();
    var db = mongoclient.db("online_shopping_app");
    var collection = db.collection("product_details");
    var result = collection.find({}).toArray();
    return result;
}   
module.exports = router;

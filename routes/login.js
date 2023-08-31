var express = require("express")
var router = express.Router();

var bcrypt =  require("bcrypt");
var {MongoClient} = require("mongodb");
const { data } = require("jquery");

var mongoclient = new MongoClient("mongodb://127.0.0.1:27017");

router.get("/",(req,res)=>{
    reqdata = req.query;
    var valid = {}
    getdbconnection(req.query).then((response)=>{
        console.log(response);
        if(response.length == 0){
            valid.msg = "Invaliduser";
        }
        bcrypt.compare(reqdata.password,response[0].password,function(err,result){
            if(result){
                valid.msg = "Validuser";
            }else{
                valid.msg = "Invaliduser";
            }
            valid = JSON.stringify(valid);
            res.send(valid);
        })
        // if(response.length >= 1){
        //     console.log("Hello");
        //     bcrypt.compare(reqdata.password,response[0].password, function(err, result) {
        //         console.log(result);
        //         if(result){
        //             validity.msg = "Validuser";
        //             console.log("inside");
        //         }else{
        //             validity.msg = "Invaliduser";
        //         }
        //     });
        // }else{
        //     validity.msg = "Invaliduser";
        // }
    })
    .catch((error)=>{
        console.log(error);
    })
})

async function getdbconnection(userdata){
    await mongoclient.connect();
    var db = mongoclient.db("online_shopping_app");
    var collection = db.collection("signupdetails");
    var result = collection.find({username : userdata.username}).toArray();
    return result;
}


module.exports = router;
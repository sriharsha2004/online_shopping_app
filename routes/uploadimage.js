var express = require('express');
var multer = require("multer");
var path = require('path');
var file_path = '';

var router = express.Router();

// const Storage = multer.diskStorage({
//     destination:function(req,file,callback){
//         callback(null,'./public/images/productImages');
//     },
//     filename : function(req,file,callback){
//         file_path = 'Image' + '-' + Date.now() + path.extname(file.originalname);
//         console.log(file_path);
//         callback(null,file_path);
//     }
// })

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/productImages');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, callback) { 
       file_path = "productImage" + '-' + Date.now() + path.extname(file.originalname);
        console.log(file_path);
        callback(null, file_path);
    }
});

router.get('/', function(req, res, next) {
    var data  = {};
    var upload = multer({ storage: storage}).single('ProdImage');
    upload(req, res, function(err) {
        console.log("frm upload method 1")
        if (err) {
            data.msg = "ERROR"
            console.log(err);
        } else {
            data.file_path = '/images/productImages/' + file_path;
            data.msg = 'success';
        }
        res.send(JSON.stringify(data));
    });
});


module.exports = router;
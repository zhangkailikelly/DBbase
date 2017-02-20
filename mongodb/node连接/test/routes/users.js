var express = require('express');
var router = express.Router();
var MongoClient=require("mongodb").MongoClient;

/* GET users listing. */
router.get('/', function(req, res, next) {
	var url="mongodb://localhost:27017/haha";
	MongoClient.connect(url,function(err,db){
		if(!err){
			db.collection("hehe").insertOne({"age":12},function(err,result){
				console.log(result);
				db.close();
				res.send(result)

			})
		}
	})


});

module.exports = router

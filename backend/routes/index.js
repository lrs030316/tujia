var express = require('express');
const conn = require('../dao/conn.js');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/sylbt",function(req,res,next){
  let sqlSearch = `select * from sylbt`;
  conn.query(sqlSearch, (err, results) => {
      let obj = {
        status:1
      }
      if (err) {
        obj.msg = "失败"
        throw err
      }else{
        obj.status=0;
        obj.result =results ;
      }
      res.json(obj);
  })
});


router.get("/Fwxqfyb",function(req,res,next){
  let sqlSearch = `select * from fwxqfyb`;
  console.log(1111);
  conn.query(sqlSearch, (err, results) => {
      let obj = {
        status:1
      }
      if (err) {
        obj.msg = "失败"
        throw err
      }else{
        obj.status=0;
        obj.result = results;
      }
      res.json(obj);
  })
});
module.exports = router;
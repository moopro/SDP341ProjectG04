var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/page1', function(req, res, next) {
  console.log(req.body);
  if(req.body.email == "moopro@gmail.com"&& req.body.password=="pro"){
    res.render('success',{email:req.body.email});
    
  }
  else{
    res.render('faill',{});
  }
});
router.get('/page2', function(req, res, next) {
  res.send("Page2");
});

module.exports = router;

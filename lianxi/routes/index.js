var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */

router.get('/', function(req, res, next) {
    var data = fs.readFileSync('public/sq.txt', 'utf-8')
    var s = data.slice(6);
    s++
    fs.writeFile('public/sq.txt','被访问的页面' + s, function (err) {
        res.render('index', {title: "express", data: s});

    })

})

router.get('/sq', function(req, res, next) {
    var data = fs.readFileSync('public/sq1.txt', 'utf-8')
    var s = data.slice(6);

    s++
    fs.writeFile('public/sq1.txt','被访问的页面' + s, function (err) {
        res.render('index', {title: "express", data: s});

    })

})
module.exports = router;

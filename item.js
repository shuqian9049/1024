var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({//创建链接地址
    host     : 'localhost',//IP地址
    user     : 'root',//用户名
    password : '123456'//密码
});

/* GET home page. */
router.get('/list', function(req, res, next) {
    connection.query('SELECT * FROM baobei.item', function(err, rows, fields) {//err报错rows形参
        res.header('Access-Control-Allow-Origin','*')
        res.send(rows)
    });

});
router.post('/detail', function(req, res, next) {
    var aa=req.body.a;
    connection.query('SELECT * FROM baobei.item WHERE id='+aa, function(err, rows, fields) {//err报错rows形参
        res.header('Access-Control-Allow-Origin','*')
        res.send(rows)
    });
});
module.exports = router;

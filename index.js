var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    console.log(req.body.name);
    fs.readFile('public/sq.txt','utf-8',function (err,data) {
        var shu=JSON.parse(data)//字符串转json格式
        shu.push({//push在后面添加 添加到最后
            title:req.body.title,
            name:req.body.name//获取前台得到的值
        });
        fs.writeFile('public/sq.txt',JSON.stringify(shu),function (data) {//转字符组格式
            fs.readFile('public/sq.txt','utf-8',function (err,data) {
                var shq=JSON.parse(data);
                res.send({name:shq});//返回页面name值
            })
        })
    })
});


module.exports = router;

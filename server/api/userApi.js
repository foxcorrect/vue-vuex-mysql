var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sql');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
    
// 增加用户接口
router.post('/addUser', (req, res) => {
    console.log(req.body);
    var sql = $sql.user.addUser;    
    var params = req.body;    
    console.log(params);
    conn.query(sql, [params.id,params.username,params.age], function(err, result) {    
        if (err) {       
            console.log(err);
        }        
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//增加用户检索接口
router.get('/getALL',(req,res)=>{
    console.log(req.body);
    var sql = $sql.user.getALL;
    conn.query(sql,function(err,result){
        if(err){
            console.log(err);
        }
        if(result){
            jsonWrite(res,result);
        }
    })
});

//用户删除接口
router.delete('/deleteUser',(req,res)=>{
    var sql = $sql.user.deleteUser;
    var params = req.query;
    console.log(req);
    conn.query(sql,[params.id],function(err,result){
        if(err){
            console.log(err);
        }
        if(result){
            jsonWrite(res,result);
        }
    })
})
module.exports = router;
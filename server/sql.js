// sql语句
var sqlMap = {
    // 用户
    user: {
        addUser: 'insert into user(id, name, age) values (?, ?, ?)',
        getALL: 'select * from user',
        deleteUser: 'delete from user where id=?'
    },
    //下面可以有很多数据表。。。。。

}
    
module.exports = sqlMap;
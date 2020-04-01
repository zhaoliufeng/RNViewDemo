let http = require('http');
let connection;
class A{
    val: number;
}

class B{
    constructor(val: string) {
        this.val = val;
    }
    val: string;
}

func(new B("111"));

// http.createServer(function (request, response) {
//     doConnectSql();
//     doPost(request, response);
// }).listen(8888);
// console.log('server start at port 8888');

doPost = (request, response) => {
    let pa = require("url").parse(request.url);
    console.log(pa);
    getUser(1, response);
};

doConnectSql = () => {
    let mysql = require('mysql');
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '111111111',
        database: 'waimai',
    });
    if (connection === null) {
        console.log('数据库链接失败');
    } else {
        console.log('数据库链接成功');
        connection.connect();
    }
};

func = (a : A) =>{
    console.log(a.val);
};

getUser = (userId, response) => {
    let sql = 'SELECT * FROM USERS WHERE uid =  + ${userId}';

    connection.query(sql, function (err, result) {
        console.log(result);
        response.writeHead(200, {'Content-type':'text/plain;charset=UTF-8'});
        response.write(JSON.stringify(result));
        response.end();
    });
};






import mysql from 'mysql';
import express from 'express';
const app = express();
const router = express.Router();
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', router);
dotenv.config();

const PORT = process.env.PORT;

const connection = mysql.createConnection({
    host : 'localhost',
    user : process.env.DATABASE_USERNAME,
    password : process.env.DATABASE_PASSWORD,
    database : 'SteemEight'
});

connection.connect();

connection.query("use SteemEight", function(err, result){
    if(err) return console.log(err);
})

router.get('/', function(req, res){
    res.json({message: 'welcome'});
})

router.post('/register', function(req, res){
  const address = req.body.user_address;
  const nickname = req.body.user_nickname;
  const password = req.body.user_password
    connection.query('insert into user(user_address, user_nickname, user_password) values(?, ?, ?)', [address, nickname, password], function (err, result) {
        if(err) return console.log(err)
        console.log(result)
        res.json({result : result})
    });   
})

router.post('/login', function(req, res){
    const address = req.body.user_address;
    const password = req.body.user_password;
    connection.query(`select * from user where user_address = "${address}"`, [address], function(err, result){
        if(err) return console.log(err);
        if(result.length){
            if(result[0].user_password === password){
                res.status(200).json({message: 'login successful'})
            }else{
                res.status(400).json({message: 'address and password not match'})
            }
        }else{
            res.status(404).json({message: 'address not exists'})
        }
    })
})

router.post('/post', function(req, res){
    const nickname = req.body.nickname;
    const title = req.body.title;
    const content = req.body.content;
    const likes = req.body.likes;
    connection.query('insert into post(nickname, title, content, likes) values(?, ?, ?, ?)', [nickname, title, content, likes], function(err, result){
        if(err) return console.log(err);
        console.log(result);
        res.json({result : result});
    })
})

router.get('/post/:nickname?', function(req, res){
    let query = {};
    if(req.params.nickname){
        query.nickname = req.params.nickname;
    }
    connection.query
})

function isLogin(req, res, next){
    if(req.user){
        next()
    }else{
        res.send('로그인을 해주세요')
    }
}

app.listen(PORT, function(){
    console.log(`listening on ${PORT}`);
})
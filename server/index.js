import express, { json } from "express";
import cors from "cors";
import multer from "multer";
import getTokenUri from "./apps/getTokenUri.js";
import saveMintData from "./apps/saveMintData.js";
import getAllMintData from "./apps/getAllMinData.js";
import sellData from "./apps/sellData.js";
import mynft from "./apps/mynft.js";
import dotenv from "dotenv";
import mysql from "mysql";
import queryMintData from "./apps/queryMintData.js"
import addressChange from "./apps/addresChange.js";


dotenv.config();

const upload = multer({
  storage: multer.memoryStorage(),
});
//@expres 연결
const app = express();
app.use(express.json());
//memory leak
app.setMaxListeners(20)
app.listen(4000);
app.use(cors());
//@ Mysql 로그인
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  user: process.env.sqlusser,
  password: process.env.sqlpassword,
});
//@ 연결
connection.connect();
//@ DB 생성
connection.query(
  "CREATE DATABASE if not exists SteemEight",
  (error, results, fields) => {
    if (error) throw error;
    //console.log(results);
  }
);
//@ DB선택
connection.query("use SteemEight", function (err, result) {
  if (err) return console.log(err);
});
//@ user table 생성
connection.query(
  "CREATE TABLE if not exists user (user_address varchar(255),user_nickname varchar(255),user_password varchar(255))",
  function (error, results, fields) {
    if (error) throw error;
    //console.log(results);
  }
);

//@  post table 생성
connection.query(
  "CREATE TABLE if not exists post (nickname varchar(255),title varchar(255),content varchar(255), likes int)",
  function (error, results, fields) {
    if (error) throw error;
    //console.log(results);
  }
);
//@ 회원가입
app.post("/register", function (req, res) {
  const address = req.body.user_address;
  const nickname = req.body.user_nickname;
  const password = req.body.user_password;
  console.log(req.body);
  connection.query(
    `insert into user values('${address}','${nickname}','${password}')`,
    function (err, result, fields) {
      if (err) return console.log(err);
      console.log("test:", result);
      res.status(200).send(`회원가입완료 :${nickname}`);
    }
  );
});

//@ login
app.post("/login", function (req, res) {
  const address = req.body.user_address;
  const password = req.body.user_password;
  connection.query(
    `select * from user where user_address = "${address}"`,
    function (err, result, fields) {
      if (err) return console.log(err);

      res.status(200).json(result);

    }
  );
});

//@ post
app.post("/post", function (req, res) {
  const nickname = req.body.nickname;
  const title = req.body.title;
  const content = req.body.content;
  const likes = req.body.likes;
  connection.query(
    `insert into post values('${nickname}', '${title}', '${content}', '${likes}')`,
    function (err, result, fields) {
      if (err) return console.log(err);
      console.log(result);
      res.status(200);
    }
  );
  // 저장하고 저장된 데이터를 받고 싶으면살리기
  connection.query("select * from post", (err, result, fields) => [
    res.send(result),
  ]);

});
//@ post all data
app.get("/postall", function (req, res) {
  connection.query("select * from post", (err, result, fields) => [
    res.send(result),
  ]);
});

//@ content만 주기
app.get("/post/:nickname", function (req, res) {
  console.log('req' + req.params.nickname)
  const nickname = req.params.nickname;
  //console.log(nickname)
  connection.query(
    `select * from post where nickname = "${nickname}"`,
    (err, result, fields) => {
      if (err) return console.log(err);

      res.send(result);
    }
  );
});

/* @@ login된 사람만 사용가능하게끔
function isLogin(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("로그인을 해주세요");
  }
}
*/

//######################

//@ post all data
app.get("/postall", function (req, res) {
  connection.query("select * from post", (err, result, fields) => [
    res.send(result),
  ]);
});
//@ content만 주기
app.get("/post/:nickname?", function (req, res) {
  const nickname = req.params.nickname;
  connection.query(
    `select * from post where nickname = "${nickname}"`,
    (err, result, fields) => {
      if (err) return console.log(err);
      console.log(result);
      res.send(result);
    }
  );
});

app.post("/like", (req, res) => {
  connection.query(
    `UPDATE post SET likes = likes+1 WHERE title = '${req.body.title}'`,
    (err, result, filed) => {
      //res.send(result);
    }
  );
  connection.query("SELECT * FROM post", (err, result, field) => {
    res.send(result);
  });
});
/* @@ login된 사람만 사용가능하게끔
function isLogin(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send("로그인을 해주세요");
  }
}
*/

//######################

//@ token uri 생성
//app.post("/tokenuri", upload.single("img"), (req, res) => {
app.post("/tokenuri", (req, res) => {
  //console.log();
  //getTokenUri(req.file.buffer)
  getTokenUri(req.body)
    .then((e) => {
      res.send(e);
    })
    .catch((err) => {
      console.error(err);
    });
});

//@ Mint data 저장
app.post("/savemintdata", (req, res) => {
  saveMintData(req.body, res);
});
//@ Mint data 불러오기
app.get("/mint/getalldata", (req, res) => {
  getAllMintData(res);
});

//@ marketplace sellData
app.post("/mint/selldata", (req, res) => {
  sellData(req.body, res);
});

//get myNft
app.post("/querymintdata/", (req, res) => {
  queryMintData(req.body, res)
})
//@sell my nft 
app.post("/mint/mynft", (req, res) => {
  mynft(req.body, res);
});
//
app.post("/mint/changeAddress", (req, res) => {
  addressChange(req.body, res);
})
/*
 const [imageSrc, setImageSrc] = useState("");

  const data = imageSrc;
  const formData = new FormData();
  formData.append("img", data);
 axios
      .post("http://localhost:4000/tokenUri", formData)
      .then(function (res) {
        // console.log(res.data)
        mintNFT(res.data); // tokenUri 형태로 받고
        const tokenJson = { tokenUri: `${res.data}` }; // 받은걸 DB에 올릴 형식으로 만들어주고
        const finalJson = Object.assign(saveTextToJson(), tokenJson); // textField에 적었던 내용과 합침
        axios.post("http://localhost:4000/getthedata", finalJson); // DB를 위해서 POST
      })
      .catch(function (error) {
        console.log(error);
      });

*/

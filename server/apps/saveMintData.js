import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

<<<<<<< HEAD
export default function saveMinData(req, res) {
=======
export default function saveMintData(req, res) {
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
  // 접속
  var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.sqlusser,
    password: process.env.sqlpassword,
  });
  //연결
  connection.connect();
  // 데이터베이스 없으면생성
  connection.query(
<<<<<<< HEAD
    "CREATE DATABASE if not exists NFTStore",
=======
    "CREATE DATABASE if not exists SteemEight",
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
    (error, results, fields) => {
      if (error) throw error;
      //console.log(results);
    }
  );
  // 선택
<<<<<<< HEAD
  connection.query("USE NFTStore", function (error, results, fields) {
=======
  connection.query("USE SteemEight", function (error, results, fields) {
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
    if (error) throw error;
  });
  //테이블 없으면 생성

  connection.query(
<<<<<<< HEAD
    "CREATE TABLE if not exists MintData(Id int, address varchar(255), Name varchar(255), Url varchar(255), sell BOOL ) ",
    function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
=======
    "CREATE TABLE if not exists MintData(tokenId int, address varchar(255), Name varchar(255), Url varchar(255), sell BOOL ) ",
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
    }
  );
  //false : 0, true : 1

  connection.query(
<<<<<<< HEAD
    `INSERT INTO  MintData  VALUES (${req.Id},'${req.ADDRESS}','${req.Name}','${req.Url}',${req.Sell}) `,
    function (error, results, fields) {
      if (error) throw error;
      //res.send("저장완료");
    }
  );

  connection.query("SELECT * FROM MintData", (error, results, fields) => {
    if (error) throw error;
    //console.log(results);
    res.send(results);
  });
=======
    `INSERT INTO  MintData  VALUES('${req.tokenId}','${req.Address}','${req.Name}','${req.Url}',${req.Sell}) `,
    function (error, results, fields) {
      if (error) throw error;
      res.send("저장완료");
    }
  );

  // connection.query("SELECT * FROM MintData", (error, results, fields) => {
  //   if (error) throw error;
  //   //console.log(results);
  //   res.send(results);
  // });
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21

  connection.end();
}

//saveMinData();

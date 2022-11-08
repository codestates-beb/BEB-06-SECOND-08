import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export default function saveMintData(req, res) {
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
    "CREATE DATABASE if not exists SteemEight",
    (error, results, fields) => {
      if (error) throw error;
      //console.log(results);
    }
  );
  // 선택
  connection.query("USE SteemEight", function (error, results, fields) {
    if (error) throw error;
  });
  //테이블 없으면 생성

  connection.query(
    "CREATE TABLE if not exists MintData(tokenId int, address varchar(255), Name varchar(255), Url varchar(255), sell BOOL ) ",
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
    }
  );
  //false : 0, true : 1

  connection.query(
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

  connection.end();
}

//saveMinData();

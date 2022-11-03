import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export default function saveMinData(req, res) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.sqlusser,
    password: process.env.sqlpassword,
  });

  connection.connect();

  connection.query(
    "CREATE DATABASE if not exists NFTStore",
    (error, results, fields) => {
      if (error) throw error;
      //console.log(results);
    }
  );

  connection.query("USE NFTStore", function (error, results, fields) {
    if (error) throw error;
  });

  connection.query(
    "CREATE TABLE if not exists MintData(Id int, address varchar(255), Name varchar(255), Url varchar(255), sell BOOL ) ",
    function (error, results, fields) {
      if (error) throw error;
      // console.log(results);
    }
  );
  //false : 0, true : 1

  connection.query(
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

  connection.end();
}

//saveMinData();

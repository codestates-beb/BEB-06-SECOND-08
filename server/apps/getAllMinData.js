import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export default function getAllMintData(res) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.sqlusser,
    password: process.env.sqlpassword,
  });

  connection.connect();
<<<<<<< HEAD
  connection.query("USE NFTStore", function (error, results, fields) {
=======
  connection.query("USE SteemEight", function (error, results, fields) {
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
    if (error) throw error;
  });

  connection.query("SELECT * FROM MintData", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
  connection.end();
}

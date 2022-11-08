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
  connection.query("USE SteemEight", function (error, results, fields) {
    if (error) throw error;
  });

  connection.query("SELECT * FROM MintData", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
  connection.end();
}

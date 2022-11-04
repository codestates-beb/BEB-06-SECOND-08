import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

export default function queryMintdata(req, res) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.sqlusser,
    password: process.env.sqlpassword,
  });

  connection.connect();

  connection.query("USE NFTStore", function (error, results, fields) {
    if (error) throw error;
  });

  connection.query(
    `SELECT * FROM MintData WHERE sell =${req.sell}`,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
  connection.end();
}

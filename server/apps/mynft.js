import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export default function mynft(req, res) {
  var connection = mysql.createConnection({
    host: "localhost",
    user: process.env.sqlusser,
    password: process.env.sqlpassword,
  });

  connection.connect();

  connection.query("USE SteemEight", function (error, results, fields) {
    if (error) throw error;
  });

  connection.query(
    `UPDATE MintData SET sell = 1 WHERE tokenId =${req.tokenId}`,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );

  /*
  const test = connection
    .query(
      "SELECT Id FROM  MintData  WHERE Id = 5",
      (error, results, fields) => {
        console.log(results);
        //console.log(results[0].Id);
        //test = results[0].Id + 1;
        //debugger;
        return results;
      }
    )
    .on((e) => {
      console.log(e);
    });
*/
  /*
  setTimeout(() => {
    //console.log("test", test._results);
    connection.query(
      "UPDATE MintData SET Id = 6 WHERE Id = 5",
      (error, results, fields) => {
        console.log(results);
        res.send(results);
      }
    );
  }, 10);
  */
  //console.log("test", test._results);
  /*
  connection.query(
    "UPDATE MintData SET Id = 5 WHERE Id = 4",
    (error, results, fields) => {
      //console.log(results);
      //console.log(test);
      const test3 = test.on("result", (e) => {
        console.log(e);
      });
      console.log(test3);
      const test2 = test._results;
      console.log("test", test2);
      res.send(results);
    }
  );
  */

  //console.log(test._results);

  /*
  //@ 저장된 데이터를 보내주고 싶으시면 이것도
  connection.query(
    `SELECT * FROM MintData WHERE Id =${req.Id}`,
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
  */

  connection.end();
}

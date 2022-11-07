import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

export default function addressChange(req, res) {
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
        `UPDATE MintData SET address= "${req.address}"  WHERE tokenId = ${req.tokenId}`,
        (error, results, fields) => {
            if (error) throw error;
            res.send(results);
        })
}
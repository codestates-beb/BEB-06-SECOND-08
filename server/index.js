import express, { json } from "express";
import cors from "cors";

connection.connect();
const app = express();
app.use(express.json());
app.listen(4000);
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

//@ sql 데이터 저장
app.post("/addsql", (req, res) => {
  console.log(req.body); //body data 확인
  //sql 데이터 저장
});

//@ sql 데이터 제공
app.get("/querydata", (req, res) => {
  res.send(/*보낼 데이터 */);
});

//@ token uri 생성
app.post("/tokenuri", (req, res) => {
  //토큰 uri 생성
  res.send(/* uri 전송 */);
});

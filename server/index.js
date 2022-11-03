import express, { json } from "express";
import cors from "cors";
import multer from "multer";
import getTokenUri from "./apps/getTokenUri.js";
import saveMinData from "./apps/saveMintData.js";
import getAllMintData from "./apps/getAllMinData.js";
import queryMintdata from "./apps/queryMintdata.js";
import mynft from "./apps/mynft.js";

const upload = multer({
  storage: multer.memoryStorage(),
});
const app = express();
app.use(express.json());
app.listen(8080);
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
  saveMinData(req.body, res);
});
//@ Mint data 불러오기
app.get("/mint/getalldata", (req, res) => {
  getAllMintData(res);
});

//@ queryMintData
app.post("/mint/selldata", (req, res) => {
  queryMintdata(req.body, res);
});

app.post("/mint/mynft", (req, res) => {
  mynft(req.body, res);
});

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

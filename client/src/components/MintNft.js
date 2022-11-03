import { React, useState } from "react";
import axios from "axios"
import abi from "./abi/abi";
import Web3 from 'web3'
import { create } from 'ipfs-http-client'
import { Buffer } from 'buffer'
import { Form } from "react-router-dom";
//create 할 준비 완료 client.add 통해서 cid를 받을 수 있어

//ipfs
const projectId = "2GwlTAQdyyInesaPvwtta8CDq7z"
const projectSecret = "bc12b7f49f073069463cb461e210777c"
const smAddress = "0x5404EcB07eea74Cc3B121E272156eE56ac6Bb399";
const auth = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64"); //basic 띄어쓰기 꼭 넣기
const client = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
        authorization: auth,
    },
});

const MintNft = ({ address }) => {
    const [imageView, setImageView] = useState(false)
    const [imgFile, setImgfile] = useState()
    const [imgUrl, setImgUrl] = useState();
    const [name, setName] = useState("aa");
    const sell = false //이데이터가 어떻게 넘어가는지 확인
    const uploadImg = (e) => {
        let file = e.target.files[0];
        console.log(file)
        const fileUrl = URL.createObjectURL(file); //blob 변환해주는거? 봐도 잘 모르겠다....
        document.querySelector(".uploadImg").src = fileUrl;
        setImageView(true);
        setImgfile(file);
        console.log(fileUrl)

    }
    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    const minting = async () => {
        const imgUrl = await client.add(imgFile); //cid
        setImgUrl(imgUrl)
        console.log("https://steemEight.infura-ipfs.io/ipfs/" + imgUrl.path)


        //메타데이터 정보
        const metaData = {
            name,
            image: "https://steemEight.infura-ipfs.io/ipfs/" + imgUrl.path,

        }

        const metaIpfs = await client.add(JSON.stringify(metaData)) //메타데이터 ipfs CID

        const metaDataUrl = "https://steemEight.infura-ipfs.io/ipfs/" + metaIpfs.path; //cid
        console.log(metaDataUrl)
        const web3 = new Web3(window.ethereum)
        const transaction = {
            from: address,
            gas: 10000000, //100만
            gasPrice: web3.utils.toWei("1.5", "gwei")
        }

        const contract = new web3.eth.Contract(abi, smAddress);
        const Minting = await contract.methods.NFTMint(metaDataUrl).send(transaction).then((res) => {
            // id 값 접근 ==>console.log(res) setState id 저장하고 db
            alert("success")
            Minted();
        })
        return Minting;
    }
    const Minted = () => {
        const formData = new FormData();
        //formData.append("Id", id)
        formData.append("ADDRESS", address);
        formData.append("Name", name);
        formData.append("Url", imgUrl);
        formData.append("Sell", sell); //sell false 로 보내는데 mynft에서 판매등록을 할 수 있게 해준 다음 버튼을 눌러서 true 만들면  db업데이트 하고 마켓플레이스에 보이게하기.
        //토큰아이디 오토인크리먼트로 설정해달라고 말씀드리기, 코스트는 고정이라 값을 빼고 싶지만 추가도 가능함...
        //가격입력을 추가해보도

        axios.post("http//localhost:8080/savemintdata", formData
            // {
            //     headers: { "Content-Type": "application/x-www-form-urlencoded" }
            // }
        ) //되는지 확인해보기
            .then((res) => {
                console.log(res.data) //성공여부 받아오기
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div>Create Nft</div>
            <div>
                <label htmlFor="file0" />{/* 인풋앞에 붙이는거 */}
                <input type="file" id="file0" onChange={uploadImg}></input>
                <div>
                    <img className={"uploadImg" + (imageView ? "on" : "")} />
                </div>
                <div>
                    Name : <input onChange={handleName} />
                </div>
                <div>
                    <button onClick={minting}>mint</button>
                </div>
            </div>
        </div>

    )
}
export default MintNft;
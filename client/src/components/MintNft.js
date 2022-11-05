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
const smAddress = "0xd631ed21F0d1702761ad6dc36732494183871C2b";
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
    const [tokenId, setId] = useState();
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


        console.log("imgURL" + "https://steemEight.infura-ipfs.io/ipfs/" + imgUrl.path)


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
            gas: 20000000, //100만
            gasPrice: web3.utils.toWei("1.5", "gwei")
        }
        const getTokenId = async () => {
            await contract.methods
                .getTokenId()
                .call({ from: window.ethereum.selectedAddress })
                .then((e) => {
                    setId(e)
                    console.log(e)
                });
        };

        const contract = new web3.eth.Contract(abi, smAddress);
        const Minting = await contract.methods.NFTMint(metaDataUrl).send(transaction).then((res) => { console.log(res) })
        getTokenId();
        alert("success")
        Minted();

        return Minting;
    }
    const Minted = async () => {
        await axios.post("http://localhost:4000/savemintdata", {
            tokenId: tokenId,
            Address: address,
            Name: name,
            Url: imgUrl.path,
            Sell: sell
        })
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
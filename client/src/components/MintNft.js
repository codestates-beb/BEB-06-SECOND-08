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
    let metaDataUrl = ''
    let imgCid = ''
    const [imgFile, setImgfile] = useState()
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
    const makeMeta = async () => {
        await client.add(imgFile).then((res) => {

            imgCid = res.path
            console.log(imgCid)
            return imgCid;
        })
        //console.log("imgURL" + "https://steemEight.infura-ipfs.io/ipfs/" + imgCid)


        //메타데이터 정보
        const metaData = {
            name,
            image: "https://steemEight.infura-ipfs.io/ipfs/" + imgCid,

        }

        const metaIpfs = await client.add(JSON.stringify(metaData)) //메타데이터 ipfs CID

        metaDataUrl = "https://steemEight.infura-ipfs.io/ipfs/" + metaIpfs.path; //cid
        console.log(metaDataUrl)

    }
    const minting = async () => {
        makeMeta();
        const web3 = new Web3(window.ethereum)
        const transaction = {
            from: address,
            gas: 20000000, //100만
            gasPrice: web3.utils.toWei("1.5", "gwei")
        }

        const contract = new web3.eth.Contract(abi, smAddress);

        const Minting = await contract.methods.NFTMint(metaDataUrl).send(transaction).then((res) => {
            console.log(res)

            return contract.methods
                .getTokenId()
                .call({ from: window.ethereum.selectedAddress })
                .then((e) => {

                    return Minted(e);
                })

        })

        alert("success")

        return Minting;
    }
    const Minted = (e) => {
        console.log(`here` + imgCid)
        axios.post("http://localhost:4000/savemintdata", {
            tokenId: e,
            Address: address,
            Name: name,
            Url: imgCid,
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
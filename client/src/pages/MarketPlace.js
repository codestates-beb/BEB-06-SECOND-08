import React, { useEffect, useState } from 'react'
import LoginMypage from '../components/MyPage'
import { Link } from 'react-router-dom'
import axios from 'axios'
import abi from "../components/abi/abi";
import Web3 from 'web3'
const smAddress = "0x5404EcB07eea74Cc3B121E272156eE56ac6Bb399";
const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abi, smAddress);
const MarketPlace = ({ address }) => {
    const [sellNft, setSellNft] = useState([]);
    const dummdata = [{
        address: "0xBD1E0DcB12E38E2942e7209dEF0ec7FDA88fBd2F",
        tokenId: 0,
        name: 123

    }, {
        address: 123333,
        tokenId: 12,
        name: 'name'
    }, {
        address: 12344444,
        tokenId: 33,
        name: 'what'
    }]
    const marketLoad = () => {
        try {
            axios.get('http://localhost:4000/mint/selldata').then((res) => {
                setSellNft(res.data);
            })
            //엔드포인트 지정받아서 sell 값 true인 친구들 받아오기
        } catch (err) {
            console.log(err) //axios확인
        }
    }
    const handleBuy = (e) => {
        const number = e.target.value;
        console.log(number)
        console.log(`rrr` + dummdata[number].address)
        console.log(address)
        // contract.methods
        //     .buyNFT(dummdata[number].address, window.ethereum.selectedAddress, dummdata[number].tokenId, 10)
        //     .send({ from: window.ethereum.selectedAddress })
        {
            contract.methods
                .NFTownerOf(0)
                .call()
                .then((e) => {
                    console.log("adress:", e);
                });
        };

        //오픈씨에 왜 안올라오는지 확인하기.
    }
    useEffect(() => {
        // marketLoad();

    }, []);
    return (
        <div>
            <div>
                {dummdata.map((el, idx) => {
                    return <div>
                        <div>owner :{el.address}</div>
                        <div>tokenId : {el.tokenId}</div>
                        <div>name : {el.name} </div>
                        <img src='https://steemEight.infura-ipfs.io/ipfs/QmXsZjSMxHEtFwYbm6JbFJvwRgR7tbbM3N1KBFE6osA5A6'></img>
                        <button value={idx} onClick={handleBuy}>Buy</button>
                    </div>

                })}
            </div>
        </div>
    )
}
export default MarketPlace;
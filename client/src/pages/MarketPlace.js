import React, { useEffect, useState } from 'react'
import LoginMypage from '../components/mypage'
import { Link } from 'react-router-dom'
import axios from 'axios'
import abi from "../components/abi/abi";
import Web3 from 'web3'
const smAddress = "0x5404EcB07eea74Cc3B121E272156eE56ac6Bb399";
const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abi, smAddress);
const MarketPlace = ({ address }) => {
    const [sellNft, setSellNft] = useState([]);

    const marketLoad = () => {
        try {
            axios.post('http://localhost:4000/mint/selldata', {
                "sell": 1
            }).then((res) => {
                console.log(res.data)
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
        console.log(`rrr` + sellNft[number].address)
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
        marketLoad();

    }, []);
    return (
        <div>
            <div>
                {sellNft.map((el, idx) => {
                    return <div>
                        <div>owner :{el.address}</div>
                        <div>tokenId : {el.tokenId}</div>
                        <div>name : {el.Name} </div>
                        <img src={`https://steemEight.infura-ipfs.io/ipfs/${el.Url}`}></img>
                        <button value={idx} onClick={handleBuy}>Buy</button>
                    </div>

                })}
            </div>
        </div>
    )
}
export default MarketPlace;
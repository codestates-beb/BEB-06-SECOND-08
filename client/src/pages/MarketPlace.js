import React, { useEffect, useState } from 'react'
import LoginMypage from '../components/mypage'
import { Link } from 'react-router-dom'
import axios from 'axios'
import abi from "../components/abi/abi";
import Web3 from 'web3'
const smAddress = "0xd631ed21F0d1702761ad6dc36732494183871C2b";
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

        } catch (err) {
            console.log(err) //axios확인
        }
    }
    const handleBuy = (e) => {
        const number = e.target.value;
        console.log(number)
        console.log(('from' + window.ethereum.selectedAddress))
        console.log(`to` + sellNft[number].address)
        console.log('target' + sellNft[number].tokenId)
        console.log(address)
        contract.methods
            .buyNFT(sellNft[number].address, window.ethereum.selectedAddress, sellNft[number].tokenId, 100)
            .send({ from: window.ethereum.selectedAddress }).then((res) => {
                axios.post("http://localhost:4000/mint/changeAddress", {

                    address: window.ethereum.selectedAddress,
                    tokenId: sellNft[number].tokenId
                })
            })
        // {
        //     contract.methods
        //         .NFTownerOf()
        //         .call()
        //         .then((e) => {
        //             console.log("address:", e);
        //         });
        // };

        //오픈씨에 왜 안올라오는지 확인하기.
    }
    useEffect(() => {
        marketLoad();

    }, []);
    return (
        <div className='market'>
            <h3> Market Place</h3>
            <div className='product_container'>

                {sellNft.map((el, idx) => {
                    return (
                        <div className="product">
                            <div className="product_img_div"><img src={`https://steemEight.infura-ipfs.io/ipfs/${el.Url}`} className="product_img" /></div>
                            <p className="product_des"> {el.tokenId}</p>
                            <p className="product_des"> {el.Name}</p>
                            <button value={idx} onClick={handleBuy}>Buy</button>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
export default MarketPlace;
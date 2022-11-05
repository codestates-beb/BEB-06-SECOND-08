import React, { useEffect, useState } from 'react'
import image from '../images/user-thumb.png'
import nft from '../images/account.svg'
import right from '../images/right_arrow.svg'
import './MyPage.css'
import Transfer from './TokenTransfer'
import MintNft from './MintNft'
import axios from 'axios'
import MyPage from '../pages/MyPage'



const LoginMypage = ({ address }) => {
    const [transferBtn, setTransferBtn] = useState(false)
    const [mintNftBtn, setMintNftBtn] = useState(false)
    const [sell, setSell] = useState(false);
    const nickname = localStorage.getItem("nickname")
    const address2 = window.ethereum.selectedAddress;
    const [myNft, setMyNft] = useState([])
    const [myPost, setMyPost] = useState([{
        nickname: 1234,
        title: 333,
        likes: 123
    }]);
    const getAll = () => {
        // axios.get(`http://localhost:4000/post/${nickname}`).then((res) => {
        // setMyPost(res.data) //back에서 닉네임으로 주니까 닉네임으로 받기 
        // })
        axios.post(`http://localhost:4000/querymintdata/`, {
            "address": address2
        }).then((res) => {
            setMyNft(res.data)
        })
    }
    //확인

    const handleSell = (e) => {
        const i = e.target.id

        if (window.confirm("판매하시겠습니까?")) {


            axios
                .post("http://localhost:4000/mint/mynft", { tokenId: myNft[i].tokenId })
                .then((res) => {
                    console.log(res.data)
                    alert("등록완료!")


                })
        }
    }
    useEffect(() => {
        getAll();
    }, [])
    return (
        <div>
            <div className='head'>

                <div className='imgs'>
                    <div className="thumb-wrapper">
                        <img src={image} alt="thumb" className='thumb' />
                    </div>
                </div>
                <div className="text-area">

                </div>
            </div>
            <div className="address">Your address :{address}</div>
            <p></p>
            {myPost.map((el) => {
                return <div>
                    <div>title : {el.title}</div>
                    <div>likes : {el.likes} </div>
                </div>
            })}
            <p></p>
            {myNft.map((el, idx) => {
                return (
                    <div>
                        <img onClick={handleSell} id={idx} src={`https://steemEight.infura-ipfs.io/ipfs/${el.Url}`}></img>
                        <div>name : {el.Name}</div>
                        <div>tokenId : {el.tokenId}</div>

                    </div>)
            })}
            <button className="" onClick={() => { setTransferBtn(!transferBtn) }}>transferBtn</button>
            {transferBtn && <Transfer address={address} />}
            <p></p>

            <button onClick={() => { setMintNftBtn(!mintNftBtn) }}>MintBtn</button>
            {mintNftBtn && <MintNft address={address} />
            }
            <p></p>




        </div>
    )
}
export default LoginMypage;
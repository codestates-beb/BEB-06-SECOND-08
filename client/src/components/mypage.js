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
    const [myNft, setMyNft] = useState([{
        tokenId: 2,
        name: 1,
        uri: 'https://steemEight.infura-ipfs.io/ipfs/QmXsZjSMxHEtFwYbm6JbFJvwRgR7tbbM3N1KBFE6osA5A6',
        sell: false

    }, {
        name: 22,
        tokenId: 333,
    }])
    const [myPost, setMyPost] = useState([{
        postid: 1,
        address: 2,
        title: "sdfsdf"
    }, {
        postid: 22,
        address: 333,
        title: "sdfsdf"
    }]);
    const getAll = async () => {
        axios.get(`http/localhost:8080/post/${address}`).then((res) => {
            setMyPost(res.data) //back에서 닉네임으로 주니까 닉네임으로 받기 
        })
        axios.get(`http://localhost:8080/mint/${address}`).then((res) => {
            setMyNft(res.data)
        }) //get으로 바꾸는거 말씀드려보기. address값이 const params.address로 들어가면 더 쉬울듯 싶으나 아니면 내가 포스트로 바꾸기...
    }

    const handleSell = (e) => {
        const i = e.target.id

        if (window.confirm("판매하시겠습니까?")) {
            console.log(myNft[i])
            //db에 sell true로 바꿔주기
            axios
                .post("http://localhost8080/mint/selldata") //end포인트 맞추기 여기로 날라가면 nft에 있는 sell 값을 껏다켯다 해주기 이거 버튼 change되게 만들기 post 토큰아이디값 -> false->true
            // res.status(200)
            // alert("판매등록이 완료되었습니다.")
            // res.status(404){

            // }
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
                    <div>post : {el.postid}</div>
                    <div>title : {el.title} </div>
                </div>
            })}
            <p></p>
            {myNft.map((el, idx) => {
                return (
                    <div>
                        <img onClick={handleSell} id={idx} src='https://steemEight.infura-ipfs.io/ipfs/QmXsZjSMxHEtFwYbm6JbFJvwRgR7tbbM3N1KBFE6osA5A6'></img>
                        <div>name : {el.name}</div>
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
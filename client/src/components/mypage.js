import React, { useEffect, useState } from 'react'
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
    const [myPost, setMyPost] = useState([]);
    const getAll = () => {
        axios.get(`http://localhost:4000/post/${nickname}`).then((res) => {
            console.log(res.data)
            setMyPost(res.data) //back에서 닉네임으로 주니까 닉네임으로 받기 
        })
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
    const transferHandle = () => {
        setTransferBtn(!transferBtn)
        setMintNftBtn(false)
    }
    const mintHandle = () => {
        setMintNftBtn(!mintNftBtn)
        setTransferBtn(false)
    }
    useEffect(() => {
        getAll();
    },)
    return (
        <div>
            <div className='head'>
                <div>
                    <div className='imgs'>
                        <div className="thumb-wrapper">
                            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBhxEL-Vw6UsiCP4c7QBiaOLFAKXW6pMq4g&usqp=CAU`} alt="thumb" className='thumb' />
                        </div>
                    </div>
                    <div className="text-area">
                        < h1>{nickname}님 환영합니다!</h1>
                        <div className='desc'>포스팅 :{myPost.length}개<p />
                            보유 NFT :{myNft.length}개</div>
                        <div className="address">Your address :{address}</div>
                    </div>
                </div>
            </div>
            <ul className=''></ul>

            <p></p>
            <div><h3>Your Posts</h3></div>
            <div className='post_outer'>
                {myPost.map((el) => {

                    return <div>
                        <div className='post_container'>
                            <div className='post_title'> {el.title}</div><br />
                            <div className='title'> {el.content}</div><br />
                            <div>👍 : {el.likes} </div>
                        </div>
                    </div>
                })}
            </div>
            <p></p>

            <div className='product_container'>
                {myNft.map((el, idx) => {
                    return (
                        <div className="product">
                            <div className="product_img_div"><img onClick={handleSell} id={idx} src={`https://steemEight.infura-ipfs.io/ipfs/${el.Url}`} className="product_img" /></div>
                            <h5 className="product_des"> {el.Name}</h5>
                            <p className="product_des"> {el.tokenId}</p>
                        </div>
                    )
                })}


            </div>
            <div className='btn_container'>
                <div >
                    <button className="btnMypage" onClick={transferHandle}>Transfer</button>
                    {transferBtn && <div className='trans_container'> <Transfer address={address} /> </div>}

                </div>
                <p></p>

                <div className>
                    <button className="btnMypage" onClick={mintHandle}>Mint!</button>
                    {mintNftBtn && <div className='trans_container'><MintNft address={address} /></div>
                    }
                </div>
            </div>




        </div >
    )
}
export default LoginMypage;
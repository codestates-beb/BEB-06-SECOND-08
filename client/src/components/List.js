import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cardpost from './Cardpost';
import { Link } from 'react-router-dom';
import abi from '../apps/abi/abi';

const Web3 = require("web3");

const List = () => {
    const mainAddr = "0x691d21d24cac39b959fF6a562b0b41C9645EE3a1"; //고릴 주소
    const smAddress = "0xd631ed21F0d1702761ad6dc36732494183871C2b"; //고릴 배포 smaddress

    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, smAddress);

    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState(false);

    
      const clickLike = () => {
        axios.patch('http://localhost:4000/likes/${id}', { "likes" : likes })
        setLikes(likes)

        contract.methods
          .clickLike(window.ethereum.selectedAddress)
          .send({ from: window.ethereum.selectedAddress })
          .then((e) => {
            console.log("result_writeTxt:", e);
          });
      };

    //likes를 누르면  post로 디비에 저장 > 그리고 patch로 likes 변경
    const getPosts = () => {
        axios.get('http://localhost:4000/postall').then((res) => {
            console.log(res.data)
            setPosts(res.data);
            // console.log(res.data.likes)
        })
    }
    
    const toggleLike = async (e) => {
        const res = await axios.post('http://localhost:4000/likes/:id?')
        setLikes(!likes)
    }

    useEffect(() => {
        getPosts();
    }, [])


    return (
        <div>
            <div className='ms-1 d-flex justify-content-between'>
                <h1>Posting List</h1>
                <div>
                    <Link to='/Post' className='btn btn-success'>
                        Create Posting
                    </Link>
                </div>
            </div>
            {posts.map((el, idx) => {
                return (
                    <Cardpost key={idx} nickname={el.nickname} title={el.title} content={el.content} likes={el.likes}>
                        <div className='d-flex justify-content-between'>
                            <div>{el.nickname}</div>
                            <div>{el.title}</div>
                            <div>{el.content}</div>
                            <div>{el.likes}</div>
                            <button onClick={clickLike}>like</button>
                        </div>
                    </Cardpost>
                )
            })}
        </div>
    )
}

export default List
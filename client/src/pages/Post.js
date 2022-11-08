import React, { useState } from 'react'
import axios from 'axios';
import abi from '../apps/abi/abi';

const Web3 = require("web3");

const Post = () => {

    const mainAddr = "0x691d21d24cac39b959fF6a562b0b41C9645EE3a1"; //고릴 주소
    const smAddress = "0xd631ed21F0d1702761ad6dc36732494183871C2b"; //고릴 배포 smaddress

    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, smAddress);


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [nickname, setNickname] = useState('');
    const [likes, setLikes] = useState(0)
    const onSubmit = () => {
        axios.post('http://localhost:4000/post',
            {
                "nickname":nickname,
                "title":title,
                "content":body,
                "likes":likes
            }
        )
        contract.methods
        .writeTxt(window.ethereum.selectedAddress)
        .send({ from: window.ethereum.selectedAddress })
        .then((e) => {
          console.log("result_writeTxt:", e);
        });
    }
    return (
        <div className='Container'>
          <h1>Create Posting</h1>
            <div className='mb-3'>
                <label className='form-lable'>Title</label>
                <input
                    className='form-control'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
            </div>
            <div className='mb-3'>
                <label className='form-lable'>Body</label>
                <textarea
                    className='form-control'
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                    rows='10'
                />
            </div>
            <button
                className='btn btn-success'
                onClick={onSubmit}
            >Post</button>
        </div>
    )
}

export default Post
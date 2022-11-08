import { useEffect, useState } from "react";
import axios from "axios"
import logo from "../images/Logomark-steemit.png"
import './Login.css'
import { Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faSignature } from "@fortawesome/free-solid-svg-icons";



function Login({ setCheckLogin, address, login }) {
    const navigate = useNavigate();
    const [password, setpwd] = useState(undefined);


    console.log(localStorage.getItem("address"))

    const onHandlePwd = (e) => {
        setpwd(e.target.value)
        console.log(password)
    }

    const loginChange = async () => {
        try {

            axios.post('http://localhost:4000/login',
                {
                    user_address: address,
                    user_password: password
                })
                .then((result) => {
                    if (!result.data[0].user_address) {
                        console.log(result.data[0].user_address)
                        return alert("일치하는 회원이 없습니다! 회원가입을 해주세요")
                    }
                    if (result.data[0].user_address === address && result.data[0].user_password === password) {
                        localStorage.setItem('address', result.data[0].user_address);
                        localStorage.setItem('password', result.data[0].user_password);
                        localStorage.setItem('nickname', result.data[0].user_nickname);
                        console.log(localStorage.getItem('address'))
                        setCheckLogin();
                        alert(`"${result.data[0].user_nickname}"님 환영합니다.`)
                        return navigate('/')
                    } else {
                        return alert("password is wrong");
                    }
                })
        } catch (err) {
            console.log(err) //check axios res(back) 닉네임ㅂ때문에 아마 res상태말고 데이터 값을 받아와야할듯

        }
    }


    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <div className="imgs">
                        <div className="container-image">
                            <img src={logo} alt="logo" className="profile" />

                        </div>
                    </div>


                    <div>
                        <div > <h1 style={{ color: 'white' }}>Login Here</h1></div>

                        <div>
                            <div style={{ color: 'white' }}> {address} </div>
                        </div>
                        <div className="second-input">
                            <input claseName='input_login' type='password' value={password} placeholder="password" className="name" onChange={onHandlePwd}></input>
                        </div>
                        <div>
                            <button onClick={loginChange}><FontAwesomeIcon icon={faSignature} /></button></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
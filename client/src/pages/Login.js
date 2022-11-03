import { useState } from "react";
import axios from "axios"
import logo from "../images/Logomark-steemit.png"
import './Login.css'
import { useNavigate } from "react-router-dom";



function Login({ setCheckLogin, address }) {
    const [password, setpwd] = useState(undefined)


    const onHandlePwd = (e) => {
        setpwd(e.target.value)
        console.log(password)
    }

    const loginChange = async () => {
        try {

            axios.post('http://localhost:8080/login',
                {
                    address,
                    password
                })
                .then((result) => {
                    if (!result.data.address) {
                        alert("일치하는 회원이 없습니다! 회원가입을 해주세요")
                    }
                    if (result.data.address === address && result.data.password === password) {
                        setCheckLogin();
                        alert`${result.data.nickName}님 환영합니다.`
                    } else {
                        alert("password is wrong");
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
                            <input type='password' value={password} placeholder="password" className="name" onChange={onHandlePwd}></input>
                        </div>
                        <div className="login-button"> <button claseName="loginBtn" onClick={loginChange}>Login</button></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
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
            axios.post('///',
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
                    } else {
                        console.log("비번이 틀림");
                    }
                })
        } catch (err) {
            console.log(err)

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
                        <div className="login-button"> <button onClick={loginChange}>Login</button></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
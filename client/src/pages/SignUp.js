import { useState } from "react";
import axios from "axios"

function SignUp({ address }) {
    const [password, setPwd] = useState();
    const [confirmPwd, setConfirmPwd] = useState();
    const [nickname, setNickName] = useState();
    const onHandleNickname = (e) => {
        setNickName(e.target.value)
        console.log(nickname)
    }
    const onHandlePwd = (e) => {

        setPwd(e.target.value)
        console.log(password)

    }
    const onHandleConfirmPwd = (e) => {
        setConfirmPwd(e.target.value)
        console.log(confirmPwd)
    }
    const checkPwd = () => {
        if (nickname.length <= 2) {
            return alert("Nickname should be more then two characters long")
        }
        if (password !== confirmPwd) {
            return alert("비밀번호를 확인하세요.")
        }
        else {
            if (password.length <= 3 || confirmPwd.length <= 3) {
                return alert("비밀번호는 네 글자 이상입니다.")
            }
            else {


                axios
                    .post("http://localhost:8080/register", {
                        address,
                        nickname,
                        password,

                    }).then((res) => {
                        console.log(res)
                        if (res.status(200)) {
                            return alert("회원가입 성공!")
                        } else {
                            return alert("아이디가 이미 존재합니다.")
                        }
                    })
            }
        }
    }
    return (
        <div>
            <div>ADDRESS : {address} </div>
            <div>Nickname : <input type='text' placeholder="Nickname" onChange={onHandleNickname}></input></div>
            <div> password : <input type='password' value={password} placeholder="password" className="name" onChange={onHandlePwd}></input></div>
            <div> Confirm password : <input type='password' value={confirmPwd} placeholder="Confirm password" className="name" onChange={onHandleConfirmPwd}></input></div>
            <div><button onClick={checkPwd}>submit</button></div>
        </div>

    )
}
export default SignUp;
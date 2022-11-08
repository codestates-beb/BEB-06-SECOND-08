import { useState } from "react";
import axios from "axios"
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faAddressBook, faIdCard, faLock } from "@fortawesome/free-solid-svg-icons";
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
                    .post(`http://localhost:4000/register`,
                        {
                            user_address: address,
                            user_nickname: nickname,
                            user_password: password,
                        }).then((res) => {
                            console.log(res)
                        })
            }
        }
    }
    return (
        <div className="sign_container">
            <div >
                <p className="sign_address"><FontAwesomeIcon icon={faAddressBook} />  {address} </p>
            </div>
            <div>
                <FontAwesomeIcon icon={faIdCard} />
                <input className="info_container" type='text' placeholder="Nickname" onChange={onHandleNickname}>
                </input>
            </div>
            <div >
                <FontAwesomeIcon icon={faLock} />
                <input className="info_container" type='password' value={password} placeholder="password" onChange={onHandlePwd}>
                </input>
            </div>
            <div>
                <FontAwesomeIcon icon={faLock} />
                <input className="info_container" type='password' value={confirmPwd} placeholder="Confirm password" onChange={onHandleConfirmPwd}>
                </input>
            </div>
            <div>
                <button className="btn_submit" onClick={checkPwd}>
                    <a> <FontAwesomeIcon icon={faLock} /></a>
                </button>
            </div>
        </div >

    )
}
export default SignUp;
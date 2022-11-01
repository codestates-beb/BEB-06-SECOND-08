import React, { useState } from 'react'
import LoginMypage from '../components/mypage'
import { Link } from 'react-router-dom'


const Mypage = ({ login, address }) => {
  //로그인 됐는지 확인 로그인이 됐다면 이 페이지 보여주고 아니면 
  //로그인 화면 보여주고 메인페이지 띄워주기.



  return (
    <div>
      {login ? <LoginMypage /> : <div>로그인을 해주세요<Link to='/login' >Login</Link></div>}

    </div >
  )
}

export default Mypage
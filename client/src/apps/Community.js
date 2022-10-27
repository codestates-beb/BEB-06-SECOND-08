import { useState } from "react";
import Display from "./Display";

function Community() {
  const [txt, setTxt] = useState("");
  const [like, setLike] = useState(0);
  const [shoData, setShowData] = useState("");

  //@ 글작성
  const getTheTxt = (e) => {
    setTxt(e.target.value); // text msg 변경
  };

  //@ 좋아요
  const clickLike = (e) => {
    setLike(like + 1);
    // like 갯수 업데이트, 및 DB 저장
    //보상 전송
  };
  //@ DB data 저장 및,토큰 보상 시스템
  const storeTxt = () => {
    setShowData(txt);
    // DB 저장
    // 보상 전송
  };

  return (
    <div className="Community">
      <h1>글작성 및 보상 시스템 설계</h1>
      <ul>
        <li>시작전 메인 계좌에서 토큰을 발행 </li>
        <ul>
          글 작성 시<li> 해당 지갑으로 일정량의 보상 지급</li>
          <li>MySql DB 에 데이터 저장</li>
          <li>저장된 데이터를 화면 표시</li>
          <li>ex : address / 글 내용 ? </li>
          <li>
            advanced : 좋아요 버튼 누를떄마다 DB 수정하여 좋아요 갯수 증가
          </li>
          <li>과부화 방지용 , 글작성 delay,ex:block delay</li>
        </ul>
      </ul>
      <textarea onChange={getTheTxt}> </textarea>
      <p>작성글:{txt}</p>
      <button onClick={clickLike}>좋아요버튼 {like}</button>
      <button onClick={storeTxt}>DB 저장 및 보상 전송 화면에 보여주기</button>
      <Display txtData={shoData}></Display>
    </div>
  );
}
export default Community;

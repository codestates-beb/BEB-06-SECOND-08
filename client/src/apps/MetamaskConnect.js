import { useState } from "react";

function MetamaskConnect() {
  const [adress, setAdress] = useState("not connected");
  const [network, setNetwork] = useState();
  const chinidList = {
    0x1: "Ethereum mainnet",
    0x5: "Goeril",
    0xaa36a7: "Sepolia",
  };
  //@ 지갑 연결
  const metaMaskConnection = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    let chainid = window.ethereum.chainId;
    let network = chinidList[chainid * 1];
    setAdress(`@Address: ${window.ethereum.selectedAddress}`);
    setNetwork(`@Network: ${network}`);
  };

  return (
    <div className="MetaMask">
      <button onClick={metaMaskConnection}>
        지갑연결 : {adress} {network}
      </button>
      <br />
      <button>로그인</button>
      <ul>
        <li> address 와 password 를 확인하여 로그인</li>
      </ul>
      <button>회원가입</button>
      <ul>
        <li> 입력 : 주소, 닉네임, password </li>
        <li> DB에 저장 </li>
      </ul>
    </div>
  );
}

export default MetamaskConnect;

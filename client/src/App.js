import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Web3 from 'web3'
import Main from "./Main";
import MyPage from "./pages/MyPage";
import Post from "./pages/Post";
import Login from "./pages/Login"
import Headers from "./components/Headers"
import { Link } from "react-router-dom";
import logo from "./images/Logomark-steemit.png"
import Footer from "./components/footer";
import { useEffect, useState } from "react";


function App() {

  //메마로그인을하고
  const [login, setIsLogin] = useState(true)
  const [address, setAddress] = useState("not connected");
  const [network, setNetwork] = useState();
  const [web3, setWeb3] = useState();

  const chinidList = {
    0x1: "Ethereum mainnet",
    0x5: "Goeril",

  };
  //@ 지갑 연결
  const metaMaskConnection = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    let chainid = window.ethereum.chainId;
    let network = chinidList[chainid * 1];
    setAddress(`${window.ethereum.selectedAddress}`);
    setNetwork(`@Network: ${network}`);
  };

  const setCheckLogin = () => {
    setIsLogin(!login);
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
        metaMaskConnection();
      } catch (err) {
        console.log(err);
      }
    }
  }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <img src={logo} className="App-logo" />
        </Link>
        <h1> Steem Eight</h1>
        <Headers login={login} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage login={login} address={address} />} />
          <Route path="/login" element={<Login setCheckLogin={setCheckLogin} address={address} />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

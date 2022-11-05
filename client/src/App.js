import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Web3 from 'web3'
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Post from "./pages/Post";
import Login from "./pages/Login"
import Headers from "./components/Headers"
import SignUp from "./pages/SignUp";
import { Link } from "react-router-dom";
import logo from "./images/Logomark-steemit.png"
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import MarketPlace from "./pages/MarketPlace";


function App() {

  //메마로그인을하고
  const [login, setIsLogin] = useState(false)
  const [address, setAddress] = useState("not connected");
  const [network, setNetwork] = useState();
  const [web3, setWeb3] = useState();
  const loginAddr = localStorage.getItem('address')

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
    if (!loginAddr) {
      setIsLogin(false)
    }
    else {
      setIsLogin(true)
    }
  }
  const setLogout = async () => {
    localStorage.removeItem('address')
    localStorage.removeItem('password')
    localStorage.removeItem('nickname')
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
        metaMaskConnection().then(() => {
          console.log(window.ethereum.selectedAddress)
        })

      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  useEffect(() => {

    setCheckLogin();
  }, [loginAddr]);

  // useEffect(()=>{

  // },[login])
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <img src={logo} className="App-logo" />
        </Link>
        <h1> Steem Eight</h1>
        <Headers login={login} setLogout={setLogout} setCheckLogin={setCheckLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage login={login} address={address} setCheckLogin={setCheckLogin} />} />
          <Route path="/login" element={<Login address={address} login={login} setCheckLogin={setCheckLogin} />} />
          <Route path="/post" element={<Post />} />
          <Route path="/signup" element={<SignUp address={address} />} />
          <Route path="/market" element={<MarketPlace address={{ address }} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

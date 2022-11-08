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
<<<<<<< HEAD
=======
import MarketPlace from "./pages/MarketPlace";
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21


function App() {

  //메마로그인을하고
<<<<<<< HEAD
  const [login, setIsLogin] = useState(true)
  const [address, setAddress] = useState("not connected");
  const [network, setNetwork] = useState();
  const [web3, setWeb3] = useState();
=======
  const [login, setIsLogin] = useState(false)
  const [address, setAddress] = useState("not connected");
  const [network, setNetwork] = useState();
  const [web3, setWeb3] = useState();
  const loginAddr = localStorage.getItem('address')
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21

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
<<<<<<< HEAD
  };

  const setCheckLogin = () => {
    setIsLogin(!login);
=======

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
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
  }

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum);
        setWeb3(web);
<<<<<<< HEAD
        metaMaskConnection();
=======
        metaMaskConnection().then(() => {
          console.log(window.ethereum.selectedAddress)
        })

>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
<<<<<<< HEAD
=======
  useEffect(() => {

    setCheckLogin();
  }, [loginAddr]);
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21


  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <img src={logo} className="App-logo" />
        </Link>
        <h1> Steem Eight</h1>
<<<<<<< HEAD
        <Headers login={login} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage login={login} address={address} />} />
          <Route path="/login" element={<Login setCheckLogin={setCheckLogin} address={address} />} />
=======
        <Headers login={login} setLogout={setLogout} setCheckLogin={setCheckLogin} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage login={login} address={address} setCheckLogin={setCheckLogin} />} />
          <Route path="/login" element={<Login address={address} login={login} setCheckLogin={setCheckLogin} />} />
>>>>>>> a3ba4246141db53664f79846cab6e0c213cedb21
          <Route path="/post" element={<Post />} />
          <Route path="/signup" element={<SignUp address={address} />} />
          <Route path="/market" element={<MarketPlace address={{ address }} />} />
        </Routes>

      </div>
      <Footer />
    </BrowserRouter>
  );
}


export default App;

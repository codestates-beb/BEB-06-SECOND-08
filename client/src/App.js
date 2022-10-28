// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import MetamaskConnect from "./apps/MetamaskConnect";
// import Community from "./apps/Community";
// import TokenTransfer from "./apps/TokenTransfer";
import Main from "./pages/Main";
import MyPage from "./pages/MyPage";
import Post from "./pages/Post";
import Headers from "./components/Headers"
import { Link } from "react-router-dom";
import logo from "./images/Logomark-steemit.png"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">
          <img src={logo} className="App-logo"/>
        </Link>
        <h1> Steem Eight</h1>
        <Headers />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

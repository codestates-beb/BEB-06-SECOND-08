import logo from "./logo.svg";
import "./App.css";
import MetamaskConnect from "./apps/MetamaskConnect";
import Community from "./apps/Community";
import TokenTransfer from "./apps/TokenTransfer";
import Solidity from "./apps/Solidity";

function App() {
  return (
    <div className="App">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
      <h1> Steam Eight</h1>
      <MetamaskConnect />
      <Community />
      <TokenTransfer />
      <Solidity />
    </div>
  );
}


export default App;

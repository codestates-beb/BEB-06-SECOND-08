import { useState } from "react";
import abi from "./abi/abi";

const Web3 = require("web3");

function Solidity() {
  const mainAddr = "0x691d21d24cac39b959fF6a562b0b41C9645EE3a1"; //고릴 주소
  const smAddress = "0xd631ed21F0d1702761ad6dc36732494183871C2b"; //고릴 배포 smaddress

  //const smAddress = "0xA2FEbe842A4b83560CcCc8e19abCF07843eb6298"; // 가나슈
  //const mainAddr = "0xd631ed21F0d1702761ad6dc36732494183871C2b"; // 가나슈

  //@ web3 connect
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(abi, smAddress);

  const [addr, setAddr] = useState(); //밸런스 조회용 주소
  const [tokenUri, setTokenUri] = useState();
  const [to, setTo] = useState();
  const [amount, setAmount] = useState();
  const [seller, setSeller] = useState();
  const [id, setId] = useState();
  const [cost, setCost] = useState();
  const [toTransfer, setToTransfer] = useState();
  const [idTransfer, setIdTransfer] = useState();
  const [idNFTownerOf, setIdNFTownerOf] = useState();
  const [addrNFTbalanceOf, setAddrNFTbalanceOf] = useState();

  //##########Mint Token
  //@mintToken
  const mintToken = () => {
    contract.methods
      .tokenmint()
      .send({ from: mainAddr })
      .then((e) => {
        console.log("tokenMint_result:", e);
      });
  };
  //########### NFT Mint (누구나 민트 가능)
  //@setttokenUri
  const setTokenUri_ = (e) => {
    setTokenUri(e.target.value);
  };
  //@ NFT mint
  const nftMint = () => {
    contract.methods
      .NFTMint(tokenUri)
      .send({ from: window.ethereum.selectedAddress }, (err, result) => {
        console.log(result);
      })
      .on("receipt", function (receipt) {
        console.log(receipt);
      });
  };

  //@  TokenId
  const getTokenId = () => {
    contract.methods
      .getTokenId()
      .call({ from: window.ethereum.selectedAddress })
      .then((e) => {
        console.log(e); // e 가 tokenID
      });
  };

  //######### token 전송

  //to 주소 설정
  const setTo_ = (e) => {
    setTo(e.target.value);
  };
  // 전송할 토큰갯수설정
  const setAmount_ = (e) => {
    setAmount(e.target.value);
  };
  //@ transfer token
  const transferToken = () => {
    contract.methods
      .transfer(to, amount)
      .send({ from: window.ethereum.selectedAddress })
      .then((e) => {
        console.log("transfer_result:", e);
      });
  };

  //##############Write Txt
  //@ writeTxt
  const writeTxtfunc = () => {
    contract.methods
      .writeTxt(window.ethereum.selectedAddress)
      .send({ from: window.ethereum.selectedAddress })
      .then((e) => {
        console.log("result_writeTxt:", e);
      });
  };

  //###################like
  //@ like
  const clickLike = () => {
    contract.methods
      .clickLike(window.ethereum.selectedAddress)
      .send({ from: window.ethereum.selectedAddress })
      .then((e) => {
        console.log("result_writeTxt:", e);
      });
  };

  //################## Buy NFT
  //@ BuyNFT
  const BuyNFT = () => {
    contract.methods
      .buyNFT(seller, window.ethereum.selectedAddress, id, cost)
      .send({ from: window.ethereum.selectedAddress })
      .then((e) => {
        console.log("result_BuyNFT", e);
      });
  };
  //@ setSelleerAddress
  const setSeller_ = (e) => {
    setSeller(e.target.value);
  };
  const setId_ = (e) => {
    setId(e.target.value);
  };
  const setCost_ = (e) => {
    setCost(e.target.value);
  };

  //################# getBalance
  //@ getAddress
  const setAddr_ = (e) => {
    setAddr(e.target.value);
  };
  //@ get token Balance
  const getBalance = () => {
    contract.methods
      .balanceOf(addr)
      .call()
      .then((e) => {
        console.log("balance:", e);
      });
  };

  //############# NFT transfer

  const NFTTransfer_ = () => {
    contract.methods
      .NFTtransferFrom(window.ethereum.selectedAddress, toTransfer, idTransfer)
      .send({ from: window.ethereum.selectedAddress })
      .then((e) => {
        console.log("resultNFTTransfer", e);
      });
  };
  const setToTransfer_ = (e) => {
    setToTransfer(e.target.value);
  };
  const setIdTransfer_ = (e) => {
    setIdTransfer(e.target.value);
  };

  //########### TokenID 별 소유자 확인
  const NFTownerOf_ = () => {
    contract.methods
      .NFTownerOf(idNFTownerOf)
      .call()
      .then((e) => {
        console.log("adress:", e);
      });
  };
  const setIdNFTownerOf_ = (e) => {
    setIdNFTownerOf(e.target.value);
  };

  //############## NFT 소유 갯수
  const NFTbalanceOf_ = () => {
    contract.methods
      .NFTbalanceOf(addrNFTbalanceOf)
      .call()
      .then((e) => {
        console.log("adress:", addrNFTbalanceOf, "NFTBalanceOf:", e);
      });
  };
  const setAddrNFTbalanceOf_ = (e) => {
    setAddrNFTbalanceOf(e.target.value);
  };

  return (
    <div>
      <h1>Solidity</h1>
      <p>Test Main Addr : {mainAddr}</p>
      <button onClick={mintToken}>tokenMint</button> <br />
      <p>tokenUri 또는 데이터</p>
      <textarea onChange={setTokenUri_}></textarea>
      <button onClick={nftMint}>nftMint</button>
      <br />
      <p>testAddr : 0x7fc155B31B26f14CA79A054c56DbFFBc64eC2f75</p>
      <p>전송할 주소/ 전송할 토큰 양</p>
      <textarea onChange={setTo_}></textarea>
      <textarea onChange={setAmount_}></textarea>
      <button onClick={transferToken}>transfer token</button>
      <br />
      <button onClick={writeTxtfunc}>WriteTxt</button>
      <button onClick={clickLike}>like</button>
      <br />
      <p>판매자주소, 구매ID, 가격</p>
      <textarea onChange={setSeller_}></textarea>
      <textarea onChange={setId_}></textarea>
      <textarea onChange={setCost_}></textarea>
      <button onClick={BuyNFT}>BuyNFT</button>
      <br />
      <p>전송할 주소, ID</p>
      <textarea onChange={setToTransfer_}></textarea>
      <textarea onChange={setIdTransfer_}></textarea>
      <button onClick={NFTTransfer_}>NFT Transfer</button>
      <br />
      <p>조회할 Id 주소</p>
      <textarea onChange={setIdNFTownerOf_}></textarea>
      <button onClick={NFTownerOf_}> Id별 소유자 주소</button> <br />
      <p>Address별 NFT 소유 갯수</p>
      <textarea onChange={setAddrNFTbalanceOf_}></textarea>
      <button onClick={NFTbalanceOf_}>Address별 NFT 소유 갯수</button>
      <p>balance 조회</p>
      <textarea onChange={setAddr_}>조회할주소</textarea>
      <button onClick={getBalance}>TokenBalance</button>
      <button onClick={getTokenId}>getOtkenId</button>
    </div>
  );
}

export default Solidity;

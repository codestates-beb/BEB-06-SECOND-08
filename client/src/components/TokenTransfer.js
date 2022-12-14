import { useEffect, useState } from "react";

import abi from "./abi/abi";
import Web3 from 'web3'
const mainAddr = "0x691d21d24cac39b959fF6a562b0b41C9645EE3a1"; //고릴 주소
const smAddress = "0xd631ed21F0d1702761ad6dc36732494183871C2b";
const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(abi, smAddress);

const Transfer = ({ address }) => {
    const [tokenQty, setTokenQty] = useState();
    const [toAddr, setToAddr] = useState();
    const [balance, setBalance] = useState();
    const handleTokenQty = (e) => {
        setTokenQty(e.target.value);
    };
    async function getBalance() {
        contract.methods
            .balanceOf(address)
            .call()
            .then((e) => {
                console.log("balance:", e);
                setBalance(e);
            });
    };
    const receiverAddr = (e) => {
        setToAddr(e.target.value);
        console.log(toAddr)
    }
    const transferToken = async () => {
        console.log(contract)
        contract.methods
            .transfer(toAddr, tokenQty)
            .send({ from: window.ethereum.selectedAddress })
            .then((e) => {
                console.log("transfer_result", e)
            })
        //abi 받으면 해보기
        //transfer 구현하고 db에 전달할 값? 없지....
    }
    useEffect(() => {
        getBalance();
    }, []);
    return (
        <div>
            <div>Your Token :{balance}
                <div>
                </div>
                <div>To :
                    <input
                        className="create_container"
                        type='text'
                        onChange={receiverAddr}>
                    </input><p />
                    Receiver : {toAddr}
                    <p />
                </div>
                <div>Qty :
                    <input
                        className="create_container"
                        type='text'
                        onChange={handleTokenQty}>
                    </input>
                    <p /> Number of SteemEight : {tokenQty}<p />
                    <button className='btnMypage' onClick={transferToken}>Send!</button>
                </div>
            </div>
        </div>
    )
}

export default Transfer;
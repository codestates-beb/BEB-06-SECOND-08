import { useState } from "react";
import axios from "axios"

const Transfer = ({ address }) => {
    const [tokenQty, setTokenQty] = useState();
    const [toAddr, setToAddr] = useState();
    const handleTokenQty = (e) => {
        setTokenQty(e.target.value);
    };
    const receiverAddr = (e) => {
        setToAddr(e.target.value);
        console.log(toAddr)
    }
    const transferToken = async () => {
        //abi 받으면 해보기
        //transfer 구현하고 db에 전달할 값? 없지....
    }
    return (
        <div>
            <div>Transfer :
                <div>
                    your address : {address}
                </div>
                <div>To :
                    <input
                        className="input"
                        type='text'
                        onChange={receiverAddr}>
                    </input><p />
                    Receiver : {toAddr}
                    <p />
                </div>
                <div>Qty :
                    <input
                        className="input"
                        type='text'
                        onChange={handleTokenQty}>
                    </input>
                    <p /> Number of SteemEight : {tokenQty}<p />
                    <button >Btn</button>
                </div>
            </div>
        </div>
    )
}

export default Transfer;
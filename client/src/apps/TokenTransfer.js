import { useState } from "react";

function TokenTransfer() {
    const [tokenQty, setTokenQty] = useState();
    const [addr, setAddr] = useState();
    const [buyNFTcost, setBuyNFTcost] = useState();
    const [buyNFTAddr, setButNFTAddr] = useState();



    //@ 전송할 토큰 갯수
    const transferTokenQty = (e) => {
        setTokenQty(e.target.value);
    };

    //@ 전송할 주소
    const getTransferAddr = (e) => {
        setAddr(e.target.value);
    };

    //@ 토큰 전송
    const transferToken = () => {
        console.log(addr + "로" + tokenQty + "만큼 보냈습니다");
        //토큰 전송 구현
    };

    //@ 이미지 입력
    const inputImage = () => {
        //이미지 입력
    };

    //@ NFT 발행
    const mintNFT = () => {
        //NFT 발행 구현
    };

    //@ NFT 희망 구매 금액
    const bidNFTcost = (e) => {
        setBuyNFTcost(e.target.value);
    };
    //@ 구매 희망자 주소
    const getBuyerAddr = (e) => {
        setButNFTAddr(e.target.value);
    };

    return (
        <div className="Token">
            <h1>TokenTransfer</h1>
            <button onClick={mintToken}>Token발행</button>
            <textarea onChange={transferTokenQty}></textarea>
            <textarea onChange={getTransferAddr}></textarea>
            <p>
                @Qty:{tokenQty}
                @address:{addr}
            </p>
            <button onClick={transferToken}>Token 전송</button>
            <button onClick={inputImage}>이미지 입력</button>
            <button onClick={mintNFT}>NFT 발행</button>
            <button>NFT 구매</button>
            <textarea onChange={bidNFTcost}></textarea>
            <textarea onChange={getBuyerAddr}></textarea>
            <p>
                @cost: {buyNFTcost}
                @address:{buyNFTAddr}
            </p>
        </div>
    );
}

export default TokenTransfer;

import React from 'react'
import image from '../images/user-thumb.png'
import nft from '../images/account.svg'
import right from '../images/right_arrow.svg'
import './MyPage.css'
import Transfer from './TokenTransfer'
import MintNft from './MintNft'

const LoginMypage = ({ address }) => {

    return (
        <div>
            <div className='head'>

                <div className='imgs'>
                    <div className="thumb-wrapper">
                        <img src={image} alt="thumb" className='thumb' />
                    </div>
                </div>
                <div className="text-area">

                </div>
            </div>
            <div className="address">Your address :{address}</div>
            <li className='item'>
                <div className='left'>
                    <img src={nft} alt="nft" />
                    <div className='name'>NFTS</div>
                </div>
                <div className='right'>
                    <img src={right} alt="arrow" />
                </div>
                <Transfer address={address} />
                <MintNft address={address} />

            </li>
        </div>
    )
}
export default LoginMypage;
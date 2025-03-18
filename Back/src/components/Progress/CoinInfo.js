import React from 'react'
const CoinInfo = (props) => {
    return (
        <>
            <div className="c_info_tab">
                {props.value}
                <div className="progress_2">
                    <span
                        className="title timer ttl_img"
                        data-from={0}
                        data-to={85}
                        data-speed={1800}
                    >
                        <img src={props.coin} alt="coin" />
                    </span>
                    <div className="overlay" />
                    <div className="left" />
                    <div className="right" />
                </div>
                <h2>100 Coin</h2>

            </div>
        </>
    )
}

export default CoinInfo

import React from 'react'
import blue from '../../images/blue_sum_bg.png'
const WalletInfo = (props) => {
  return (
    <>
      <div className="coin_inf_p">
        <div className="coin_img_p_left">
          <img src={props.limage} alt="coin bg" />
        </div>
        <div className="coin_img_p_right">
          <img src={blue} alt="coin bg" />
          <div>
            <h2>{props.name}</h2>
            <div className="coin_bl_inf">
              <p>
                <img src={props.image} alt="coin" />
                {props.value}
              </p>
              <button className="check_his_wal">Redeem Now</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default WalletInfo

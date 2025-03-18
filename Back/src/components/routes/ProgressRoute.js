import React from 'react'
import CateHeader from '../header/CateHeader'
import WalletInfo from '../Progress/WalletInfo'
import Right from '../header/Right'
import coin from '../../images/coin.png'
import coin1 from '../../images/coins_bg.png'
import diamond1 from '../../images/diamond_bg.png'
import diamond from '../../images/diamond.png'  
import { walletData } from '../AllApi/WalletApi';
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import { useEffect, useState } from 'react'
const ProgressRoute = () => {
    const[coins,setCoins]=useState([]);
const [isLoading, setIsLoading] = useState(true);
    const[diamonds,setDiamonds]=useState('');
    const[point,setPoint]=useState('')
    useEffect(() => {
          ; (async () => {
            try {
                 const WalletEndPoint='userheaderdetail/homecategory'
              const result = await walletData(user_id,BASE_URL,WalletEndPoint,tok); // Replace with your endpoint
              setCoins(result.data.wallet.show_coin_balance)
              setPoint(result.data.wallet.point_balance)
              setDiamonds(result.data.wallet.diamond_balance)
              setIsLoading(false);
                  } catch (error) {
              console.log(error)
            }
          })()
        }, []);
    return (
        <>
            <div className="section">
                <div className="s_left">
                    <CateHeader name={'Wallet'}></CateHeader>
                   
                    <div className="body_sec">
                        {/*coins Info section*/}
                        {/* <div className="c_info_tabs">
                            <CoinInfo coin={coin} value={coins}></CoinInfo>
                            <CoinInfo coin={coin} value={point}></CoinInfo>
                            <CoinInfo coin={diamond}  value={diamonds}></CoinInfo>
                            
                        </div> */}
                        {isLoading && <div className='center ldr_center'>
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue">
                <div className="circle-clipper left">
                  <div className="circle"></div>
                </div><div className="gap-patch">
                  <div className="className"></div>
                </div><div className="circle-clipper right">
                  <div className="circle"></div>
                </div>
              </div>
            </div>
          </div>
          }
                    <WalletInfo name={'Total Coins'} value={coins} image={coin} limage={coin1}></WalletInfo>
                    <WalletInfo name={'Total Diamonds'}  value={diamonds} image={diamond}  limage={diamond1}></WalletInfo>
                </div>
                </div>
                <Right></Right>
            </div>
        </>
    )
}

export default ProgressRoute  

import { useState, useEffect } from 'react'
import TournamentList from './TournamentList';
import { walletData } from '../AllApi/WalletApi';
import { tourData } from '../AllApi/TournamentApi'
import { BASE_URL,user_id,tok,checkAndHandleUserId} from '../AllApi/CommonUrl';
   const Tournament = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [responseData, setResponseData] = useState(0);
  const [arr, setArr] = useState([]);
  const[avlcoins,setAvlcoins]=useState([]);
  useEffect(() => {
    ; (async () => {
      try {
          const WalletEndPoint='userheaderdetail/homecategory'
        const result = await walletData(user_id,BASE_URL,WalletEndPoint,tok); // Replace with your endpoint
        setAvlcoins(result.data.wallet.coin_balance)
        const TourEndPoint='userheaderdetail/tournament'
        const Tour = await tourData(user_id,BASE_URL,TourEndPoint,tok);
        setResponseData(Tour);
        setArr(Tour.data)
        setIsLoading(false);
            } catch (error) {
        console.log(error)
      }
    })()
  }, []);
   // Empty dependency array to run once on mount
  // const ans =responseData.data;
  if (isLoading) {
    return <div className='center ldr_center'>
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
  // console.log(responseData)
  return (
    <>
      {/* {console.log(responseData.length > 0 ? arr:"")} */}

      <div className="trnmnt_header" />
      <div className="trnmt_list">
      <p className="l_ttl">{responseData.header_text}</p>
      {
        arr.map((data, index) => { 
          return(
          <TournamentList key={index} category_id={data.category_id} button_text={data.button_text} coin={data.coin} title={data.title} diamond={data.diamond} coin_image={data.coin_image} diamond_image={data.diamond_image}   entry_text={data.entry_text} option_type={data.option_type} win_upto={data.win_upto} colour_type={data.colour_type} bg_image={data.bg_image} avlcoins={avlcoins}></TournamentList>
        )

        })

      }
      </div>
    </>
  )
}

export default Tournament

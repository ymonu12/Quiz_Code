
// const BASE_URL = 'http://fantasyapi.mchamp.com/';
export const CoinData = async (id,coin,name,BASE_URL,endpoint,tok) => {
    try {
      const Url = `${BASE_URL}/${endpoint}`;
    const token =`${tok}`;
    const rawData ={
      "user_id":id,
      "no_of_coin":coin,
      "contest_id" : 0,
      "coins_events":name
  }
    const response = await fetch(Url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(rawData),
    });
    if (!response.ok) {
      throw new Error('some error');
    }
    const jsonData = await response.json();  
    return jsonData;
        } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
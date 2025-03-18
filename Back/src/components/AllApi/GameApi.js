
// const BASE_URL = 'http://fantasyapi.mchamp.com/';
export const gameData = async (cat_id,user_id,BASE_URL,endpoint,tok) => {
    // alert('api call')
    try {
      const Url = `${BASE_URL}/${endpoint}`;
    const token =`${tok}`;
    const rawData = {
        "user_id":user_id,
         "contest_id":"0",
         "cat_id":cat_id
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
  
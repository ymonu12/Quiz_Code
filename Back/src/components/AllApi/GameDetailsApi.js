
export const Details = async (contst_id,user_id,BASE_URL,endpoint,tok) => {
    // alert('api call')
    try {
      const Url = `${BASE_URL}/${endpoint}`;
      const token =`${tok}`;
    const rawData = {"contest_id":contst_id,"gaid":"67c2831e-b634-44d1-bbe7-785531e2383a","user_id":user_id}
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
  
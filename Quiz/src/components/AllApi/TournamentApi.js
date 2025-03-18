
export const tourData = async (id,BASE_URL,endpoint,tok) => {
    // alert('api call')
    try {
      const Url = `${BASE_URL}/${endpoint}`;
      const token =`${tok}`;
        const rawData = {
          "user_id": id,
          "apk_version": "33"
        };
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
  
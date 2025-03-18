
// const BASE_URL = 'http://fantasyapi.mchamp.com/';
export const SaveUser = async (id,coin,name,BASE_URL,endpoint,tok) => {
    try {
      const Url = "http://testing2.mchamplite.com/loginorregister";
    const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTY3Nzk5IiwidGltZVN0YW1wIjoiMjAyNC0wNS0xNyAwNTo1NTo0OSJ9.Dkt4VhHOJXINdDxwX1vPVmBQMhJFZ73FkJOBaVTtj78";
    const rawData ={
        "android_id":"3423423322342343242323",
        "gaid":"3423423322342343242323",
        "mobile_number":"3423423322342343242323",
        "login_type":"3",
        "email_id":"",
        "is_tc_accepted":"Yes",
        "imsi":"132",
        "imei":"1212",
        "brand":"",
        "model":"",
        "operator":"",
        "connection_type":"",
        "apk_version":"33",
        "android_version":"33",
        "package_version":"",
        "fb_first_name":"",
        "fb_last_name":"",
        "fb_email_id":"",
        "fb_image_url":"",
        "fb_id":"",
        "gm_first_name":"",
        "gm_last_name":"",
        "gm_email_id":"",
        "gm_image_url":""
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
  
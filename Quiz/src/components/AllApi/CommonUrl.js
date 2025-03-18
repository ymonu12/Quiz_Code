import Cookies from 'js-cookie';
// const BASE_URL = 'http://fantasyapi.mchamp.com/';
const generateRandomId = (length = 16) => {
    const characters = '1234567899';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};
const COOKIE_NAME = 'userId';
export const checkAndHandleUserId  = async() => {
    var CookeId = Cookies.get(COOKIE_NAME);
    // gbar=Cookies.get(COOKIE_NAME);
    // console.log
    if (!CookeId) {
        const userId = generateRandomId();
        try {
            const Url = "http://testing2.mchamplite.com/loginorregister";
            const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTY3Nzk5IiwidGltZVN0YW1wIjoiMjAyNC0wNS0xNyAwNTo1NTo0OSJ9.Dkt4VhHOJXINdDxwX1vPVmBQMhJFZ73FkJOBaVTtj78";
            const rawData ={
                "android_id":userId,
                "gaid":userId,
                "mobile_number":userId,
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
            Cookies.set(COOKIE_NAME, jsonData.user_id); 
               localStorage.setItem('index',JSON.stringify(jsonData.user_id))
            console.log('data',jsonData.user_id);
                }
                catch (error) {
                    console.error('Error fetching data:', error);
                    throw error;
                  }
                  window.location.reload();
    } else {
        console.log('Existing user ID:', CookeId);
    }
    return {
        useId :Cookies.get(COOKIE_NAME),
        BASE_URL : 'https://tournamentapi.mchamp.xyz',
        tok : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTY3Nzk5IiwidGltZVN0YW1wIjoiMjAyNC0wNS0xNyAwNTo1NTo0OSJ9.Dkt4VhHOJXINdDxwX1vPVmBQMhJFZ73FkJOBaVTtj78'
    };
  };
  const storedItem=JSON.parse(localStorage.getItem('index'))

  console.log('dsdfdesf',storedItem)
   var CookeId = Cookies.get(COOKIE_NAME);
    export const BASE_URL='http://testing2.mchamplite.com'
    // export const BASE_URL='https://tournamentapi.mchamp.xyz'
    export const user_id=CookeId;
    export const tok='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTY3Nzk5IiwidGltZVN0YW1wIjoiMjAyNC0wNS0xNyAwNTo1NTo0OSJ9.Dkt4VhHOJXINdDxwX1vPVmBQMhJFZ73FkJOBaVTtj78'

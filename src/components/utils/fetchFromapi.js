
import axios from 'axios';

const BASE_URL ='https://youtube-v31.p.rapidapi.com/'; 

const options = {
  method: 'GET',
  url:`'${BASE_URL}/search`,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '0f7ab035f3msh5d1ae75c882ec0dp1c37edjsnce9c128ceac7',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


export async function fetchFromapi(url) {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  return data; 
}
  
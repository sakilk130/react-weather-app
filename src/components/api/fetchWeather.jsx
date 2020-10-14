import axios from 'axios';

const url = 'https://api.openweathermap.org/data/2.5/weather';
const appid = 'f00c38e0279b7bc85480c3fe775d518c';

export const fetchWeather = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      appid: appid,
    },
  });
  return data;
};

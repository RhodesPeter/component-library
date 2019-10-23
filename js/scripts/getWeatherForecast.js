import axios from 'axios';

const getWeatherForecast = (query = 'London,uk') => {
  const APIKey = process.env.OPEN_WEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKey}`;

  return axios.get(URL);
  // .catch(console.log); The user should see a message here
};

export default getWeatherForecast;

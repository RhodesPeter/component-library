import axios from 'axios';

const getWeatherForecast = async (query = 'London') => {
  const giphyUrl = `api.openweathermap.org/data/2.5/forecast/daily?q=${query},3166-2:GB&cnt=5`;
  const response = await axios.get(giphyUrl);
    return response;
  // .catch(console.log); The user should see a message here
};

export default getWeatherForecast;

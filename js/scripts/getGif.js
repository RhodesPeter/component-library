import axios from 'axios';

const getGif = () => {
  const APIKey = process.env.GIPHY_API_KEY;
  const query = 'cat'; // obvs change this
  const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${query}&limit=1&api_key=${APIKey}`;

  return axios.get(giphyUrl)
    .then(response => response)
    .catch((error) => {
      console.log(error);
    });
};

export default getGif;

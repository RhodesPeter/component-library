import axios from 'axios';

const getGif = (query) => { // Maybe button should be disabled until something selected?
  const APIKey = process.env.GIPHY_API_KEY;
  const searchQuery = query || 'cat';
  const giphyUrl = `http://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=1&api_key=${APIKey}`;
  return axios.get(giphyUrl)
    .then(response => response)
    .catch((error) => {
      console.log(error);
    });
};

export default getGif;

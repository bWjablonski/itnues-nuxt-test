const axios = require('axios');

const apiUrl = 'https://itunes.apple.com';
const searchEndpoint = '/search';

const getAlbumSearchUrl = (term) => `${apiUrl}/${searchEndpoint}?term=${term}&entity=album`;

module.exports = {
  getAlbumData: async params => {
    return await axios
      .get(getAlbumSearchUrl(params.id))
      .then((response) => {
        return { albumData: response.data.results };
      });
  },
  search: async params => { return axios.get(getAlbumSearchUrl(params.id)) }
};
import axios from 'axios';

const options = {
  params: {
    key: '26837460-553b8b6dbfe9a53b3dd0b8a3a',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
};

const fetchPictures = async (q, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: { ...options.params, q, page },
  });
  return response;
};

const api = {
  fetchPictures,
};

export default api;

import axios from 'axios';

const API_KEY = '46968352-3644d680d7f4886b7770d091e';

export default async function pixabayAPI(value, page = 1, per_page = 20) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page,
  });

  const { data } = await axios(`https://pixabay.com/api/?${params}`);
  return data;
}

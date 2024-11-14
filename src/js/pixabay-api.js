const API_KEY = '46968352-3644d680d7f4886b7770d091e';

export default function pixabayAPI(value) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch images`);
    }
    return response.json();
  });
}

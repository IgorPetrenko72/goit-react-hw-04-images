import axios from "axios";

const fetchPictures = async (query, page) => {
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '34583981-c2300f19bc8f0e923af9dca8a';
const OPTIONS = `image_type=photo&orientation=horizontal&per_page=12`;

const response = await axios.get(`${BASE_URL}/?q=${query}&page=${page}&key=${API_KEY}&${OPTIONS}`);
  return response.data;
};
export default fetchPictures;
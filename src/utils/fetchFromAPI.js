import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
console.log(API_KEY);
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

import axios from 'axios';

const API_KEY = '4fdd443'; 
const BASE_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=4fdd443f';

export const fetchMovies = async (query) => {
  const { data } = await axios.get(`${BASE_URL}&s=${query}`);
  return data.Search;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${BASE_URL}&i=${id}`);
  return data;
};

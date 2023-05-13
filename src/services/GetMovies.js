import axios from 'axios';

const API_KEY = '4ce3c0a632503995809ef3849e4e04d9';
const BASE_URL = 'https://api.themoviedb.org/3/';
const parameters = {
  api_key: API_KEY,
};

export async function getTrendingMovies() {
  try {
    const url = BASE_URL + 'trending/movie/day';

    const trending_movies = await axios.get(url, { params: parameters });
    return trending_movies.data.results;
  } catch (error) {
    console.log(error);

    return null;
  }
}

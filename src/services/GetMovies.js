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

export async function getMovieDetails(id) {
  try {
    const url = BASE_URL + `movie/${id}`;
    const movie_details = await axios.get(url, { params: parameters });
    return movie_details.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getMovieCredits(id) {
  try {
    const url = BASE_URL + `movie/${id}/credits`;
    const movie_details = await axios.get(url, { params: parameters });
    return movie_details.data;
  } catch (error) {
    console.log(error);

    return null;
  }
}

export async function getMovieReviews(id) {
  try {
    const url = BASE_URL + `movie/${id}/reviews`;
    const movie_details = await axios.get(url, { params: parameters });
    return movie_details.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getMovieSearch(query) {
  try {
    const url = BASE_URL + `search/movie`;
    parameters.query = query;
    const movie_details = await axios.get(url, { params: parameters });
    return movie_details.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/GetMovies';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      console.log(movieId);
      const data = await getMovieDetails(movieId);
      setMovie(data);
      console.log(data);
    };

    fetchMovie();
  }, [movieId]);
  return (
    <div className={css.MovieDetails}>
      {movieId}
      <Outlet />
    </div>
  );
};

export default MovieDetails;

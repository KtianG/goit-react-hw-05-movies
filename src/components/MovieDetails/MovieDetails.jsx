import React from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from 'services/GetMovies';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieDetails(movieId);
      setMovie(data);
      setLoading(false);
    };

    fetchMovie();
    return () => setLoading(true);
  }, [movieId]);

  const renderMovieInfo = () => {
    return (
      <div className={css.movieInfo}>
        <div className={css.movieInfo__container}>
          <div className={css.movieInfo__column}>
            <img
              className={css.movieInfo__poster}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className={css.movieInfo__column}>
            <h2 className={css.movieInfo__title}>{movie.title}</h2>
            <p>User Score: {movie.vote_average}</p>
            <h3 className={css.movieInfo__sectionTitle}>Overview</h3>
            <p>{movie.overview}</p>
            <h3 className={css.movieInfo__sectionTitle}>Genres</h3>
            <p>{movie.genres.map(genre => genre.name + ' ')}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={css.MovieDetails}>
      {isLoading ? '' : renderMovieInfo()}

      <h3 className={css.movieInfo__sectionTitle}>Additional Info</h3>
      <div className={css.movieInfo__buttons}>
        <NavLink to="cast" className={css.movieInfo__button}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={css.movieInfo__button}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

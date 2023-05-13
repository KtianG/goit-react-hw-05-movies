import React from 'react';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/GetMovies';
import { MovieCard } from 'components/MovieTile/MovieCard';
import css from './Home.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
    };
    fetchData();
  }, []);

  const renderMovie = ({ title, poster_path, id }) => {
    const image_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return <MovieCard key={id} title={title} image_src={image_url} />;
  };

  return <div className={css.Home}>{trendingMovies.map(renderMovie)}</div>;
};

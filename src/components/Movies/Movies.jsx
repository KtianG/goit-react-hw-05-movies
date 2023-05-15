import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMovieSearch } from 'services/GetMovies';
import { MovieCard } from 'components/MovieTile/MovieCard';

import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const renderMovie = ({ title, poster_path, id }) => {
    const image_url = `https://image.tmdb.org/t/p/w500${poster_path}`;
    return <MovieCard key={id} id={id} title={title} image_src={image_url} />;
  };

  const setQuery = e => {
    e.preventDefault();
    const currentQuery = e.currentTarget.elements.query.value;
    if (!currentQuery) {
      return;
    }
    setSearchParams({ query: currentQuery });
  };

  const searchMovie = async () => {
    const data = await getMovieSearch(query);
    setMovies(data.results);
  };

  useEffect(() => {
    searchMovie();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div className={css.movies}>
      <form className={css.SearchForm} onSubmit={e => setQuery(e)}>
        <button type="submit" className={css.SearchForm_button}>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search movies"
        />
      </form>
      <div className={css.Gallery}>{movies.map(renderMovie)}</div>
    </div>
  );
};

export default Movies;

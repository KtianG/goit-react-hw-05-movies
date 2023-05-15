import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/GetMovies';

import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [cast, setCast] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieCredits(movieId);
      setCast(data.cast);
      setLoading(false);
    };

    fetchMovie();
    return () => setLoading(true);
  }, [movieId]);

  const renderCastMember = ({ character, name, profile_path, id }) => {
    const img_url = 'https://image.tmdb.org/t/p/w500' + profile_path;
    return (
      <li className={css.castItem} key={id}>
        <img className={css.castPhoto} src={img_url} alt={name} />
        <h3>{name}</h3>
        <p>
          Character: <b>{character}</b>
        </p>
      </li>
    );
  };

  return (
    <ul className={css.cast}>{isLoading ? '' : cast.map(renderCastMember)}</ul>
  );
};

export default Cast;

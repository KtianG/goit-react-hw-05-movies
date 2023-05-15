import React from 'react';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/GetMovies';

import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieReviews(movieId);
      setReviews(data.results);
    };

    fetchMovie();
  }, [movieId]);

  const renderReview = ({ author, id, content }) => {
    return (
      <li className={css.reviewItem} key={id}>
        <h3>{author}</h3>
        <p>{content}</p>
      </li>
    );
  };

  return (
    <ul className={css.reviewsList}>
      {reviews.length === 0
        ? 'We have not found any reviews'
        : reviews.map(renderReview)}
    </ul>
  );
};

export default Reviews;

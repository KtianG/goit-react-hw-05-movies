import css from './MovieCard.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MovieCard = ({ image_src, title, id }) => {
  const link = `/movies/${id}`;
  return (
    <Link to={link} className={css.movieCard}>
      <img className={css.movieCard__image} src={image_src} alt={title} />
      <p className={css.movieCard__details}>{title.toUpperCase()}</p>
    </Link>
  );
};

MovieCard.propTypes = {
  image_src: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

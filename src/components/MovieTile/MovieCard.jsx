import css from './MovieCard.module.css';

export const MovieCard = ({ image_src, title }) => {
  return (
    <div className={css.movieCard}>
      <img className={css.movieCard__image} src={image_src} alt={title} />
      <p className={css.movieCard__details}>{title.toUpperCase()}</p>
    </div>
  );
};

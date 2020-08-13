import * as React from 'react';
import Movie from '../../interfaces/movie';

interface Props {
  movie: Movie;
}

const MoviesList = (props: Props) => {
  const {movie} = props;
  const {title, previewImage} = movie;
  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={previewImage} alt={title} width={280} height={175} />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

export default MoviesList;

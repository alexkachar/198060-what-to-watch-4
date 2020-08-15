import * as React from 'react';
import Movie from '../../interfaces/movie';
import {Link} from 'react-router-dom';

interface Props {
  movie: Movie;
}

const MoviesList = (props: Props) => {
  const {movie} = props;
  const {id, title, previewImage} = movie;
  return (
    <article className="small-movie-card catalog__movies-card">
      <Link to={`/film/${id}`}>
        <div className="small-movie-card__image">
          <img src={previewImage} alt={title} width={280} height={175} />
        </div>
      </Link>
      <h3 className="small-movie-card__title">
        <Link
          to={`/film/${id}`}
          className="small-movie-card__link"
          style={{color: `#c9b37e`}}>
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default MoviesList;

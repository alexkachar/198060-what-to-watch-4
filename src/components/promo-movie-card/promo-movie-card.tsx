import * as React from 'react';

import Header from '../header/header';
import Loader from '../loader/loader';
import Movie from '../../interfaces/movie';
import AddButton from '../partials/add-button/add-button';

interface Props {
  promoMovie: Movie;
  isAuth: boolean;
  onSetFavoriteStatus: (movieId: number | string, isFavorite: boolean) => void;
}

const PromoMovieCard = (props: Props) => {
  const {promoMovie, isAuth, onSetFavoriteStatus} = props;

  if (!promoMovie) {
    return <Loader />;
  }

  const {
    id,
    isFavorite,
    title,
    genre,
    released,
    backgroundImage,
    posterImage,
  } = promoMovie;

  return (
  <>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <Header isFavoritesHeader={false} />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={`${title} poster`} width={218} height={327} />
          </div>
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>
            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 21 19" width={21} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <AddButton
                id={id}
                isAuth={isAuth}
                isFavorite={isFavorite}
                onSetFavoriteStatus={onSetFavoriteStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default PromoMovieCard;

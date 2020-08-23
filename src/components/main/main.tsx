import * as React from 'react';

import PromoMovieCard from '../promo-movie-card/promo-movie-card';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import Movie from '../../interfaces/movie';

interface Props {
  movies: Movie[];
  promoMovie: Movie;
  genres: string[];
  selectedGenre: string;
  showMoreAccess: boolean;
  isAuth: boolean;
  onGenreSelect: (genre: string) => void;
  onShowMoreClick: () => void;
}

const Main = (props: Props) => {
  const {movies, promoMovie, genres, selectedGenre, showMoreAccess, isAuth, onGenreSelect, onShowMoreClick} = props;
  return (
    <div>
      <PromoMovieCard
        promoMovie={promoMovie}
        isAuth={isAuth}
      />
      <div className="page-content">
        <Catalog
          movies={movies}
          genres={genres}
          selectedGenre={selectedGenre}
          showMoreAccess={showMoreAccess}
          onGenreSelect={onGenreSelect}
          onShowMoreClick={onShowMoreClick}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Main;

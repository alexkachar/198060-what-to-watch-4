import * as React from 'react';

import PromoMovieCard from '../promo-movie-card/promo-movie-card';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import Movie from '../../interfaces/movie';

interface Props {
  movies: Movie[];
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const Main = (props: Props) => {
  const {movies, genres, onGenreSelect, selectedGenre} = props;
  return (
    <div>
      <PromoMovieCard />
      <div className="page-content">
        <Catalog
          movies={movies}
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreSelect={onGenreSelect}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Main;

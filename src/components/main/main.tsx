import * as React from 'react';

import MovieCardBig from '../movie-card-big/movie-card-big';
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
      <MovieCardBig />
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

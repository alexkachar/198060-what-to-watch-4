import * as React from 'react';

import MovieCardBig from '../movie-card-big/movie-card-big';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import Movie from '../../interfaces/movie';

interface Props {
  movies: Movie[];
  genres: string[];
}

const Main = (props: Props) => {
  const {movies, genres} = props;
  return (
    <div>
      <MovieCardBig />
      <div className="page-content">
        <Catalog
          movies={movies}
          genres={genres}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Main;

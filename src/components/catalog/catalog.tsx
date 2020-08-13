import * as React from 'react';
import ShowMore from '../partials/show-more/show-more';
import MoviesList from '../movies-list/movies-list';
import GenreList from '../genre-list/genre-list';
import Movie from '../../interfaces/movie';

interface Props {
  movies: Movie[];
  genres: string[];
  selectedGenre: string;
  onGenreSelect: (genre: string) => void;
}

const Catalog = (props: Props) => {
  const {movies, genres, onGenreSelect, selectedGenre} = props;
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreSelect={onGenreSelect}
      />
      <MoviesList movies={movies}/>
      <ShowMore />
    </section>
  );
};

export default Catalog;

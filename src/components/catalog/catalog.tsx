import * as React from 'react';
import ShowMore from '../partials/show-more/show-more';
import MoviesList from '../movies-list/movies-list';
import GenreList from '../genre-list/genre-list';

const Catalog = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <GenreList />
    <MoviesList />
    <ShowMore />
  </section>
);

export default Catalog;

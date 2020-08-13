import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieCard from './movie-card';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`MovieCard renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieCard movie={MOCK_MOVIES[0]} />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

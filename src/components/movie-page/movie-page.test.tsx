import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviePage from './movie-page';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`MoviePage renders correctly`, () => {
  const tree = renderer
    .create(
        <MoviePage movies={MOCK_MOVIES} />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

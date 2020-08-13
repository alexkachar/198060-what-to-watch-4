import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviesList from './movies-list';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`MoviesList renders correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList movies={MOCK_MOVIES} />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

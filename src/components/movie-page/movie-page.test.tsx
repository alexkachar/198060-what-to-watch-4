import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviePage from './movie-page';

it(`MoviePage renders correctly`, () => {
  const tree = renderer
    .create(
        <MoviePage />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

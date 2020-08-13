import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieCardBig from './movie-card-big';

it(`MovieCardBig renders correctly`, () => {
  const tree = renderer
    .create(
        <MovieCardBig />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

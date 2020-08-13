import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MoviesList from './movies-list';

it(`MoviesList renders correctly`, () => {
  const tree = renderer
    .create(
        <MoviesList />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

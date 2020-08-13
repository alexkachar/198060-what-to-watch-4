import * as React from 'react';
import * as renderer from 'react-test-renderer';
import GenreList from './genre-list';

it(`GenreList renders correctly`, () => {
  const tree = renderer
    .create(
        <GenreList />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

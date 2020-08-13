
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {App} from './app';
import MOCK_MOVIES from '../../test-data/mock-movies';
import MOCK_GENRES from '../../test-data/mock-genres';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <App
          movies={MOCK_MOVIES}
          genres={MOCK_GENRES}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});


import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {App} from './app';
import MOCK_MOVIES from '../../test-data/mock-movies';
import MOCK_GENRES from '../../test-data/mock-genres';

const SELECTED_GENRE = `Action`;

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <App
            movies={MOCK_MOVIES}
            promoMovie={MOCK_MOVIES[0]}
            selectedGenre={SELECTED_GENRE}
            genres={MOCK_GENRES}
            onGenreSelect={jest.fn()}
          />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

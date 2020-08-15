import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Main from './main';
import MOCK_MOVIES from '../../test-data/mock-movies';
import MOCK_GENRES from '../../test-data/mock-genres';

const SELECTED_GENRE = `Action`;

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Main
          movies={MOCK_MOVIES}
          promoMovie={MOCK_MOVIES[0]}
          genres={MOCK_GENRES}
          selectedGenre={SELECTED_GENRE}
          onGenreSelect={jest.fn()}
        />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

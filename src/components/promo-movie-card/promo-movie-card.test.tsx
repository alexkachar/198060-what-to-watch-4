import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import PromoMovieCard from './promo-movie-card';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`PromoMovieCard renders correctly`, () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <PromoMovieCard promoMovie={MOCK_MOVIES[0]} />
      </BrowserRouter>, {
      createNodeMock: () => document.createElement(`div`)
    })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

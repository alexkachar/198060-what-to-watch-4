import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PromoMovieCard from './promo-movie-card';
import MOCK_MOVIES from '../../test-data/mock-movies';

it(`PromoMovieCard renders correctly`, () => {
  const tree = renderer
    .create(
        <PromoMovieCard promoMovie={MOCK_MOVIES[0]} />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

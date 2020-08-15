import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PromoMovieCard from './promo-movie-card';

it(`PromoMovieCard renders correctly`, () => {
  const tree = renderer
    .create(
        <PromoMovieCard />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

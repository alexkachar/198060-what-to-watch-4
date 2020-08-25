import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import MovieReviews from './movie-reviews';
import mockStore from '../../test-data/mock-store';
import Review from '../../interfaces/review';
import mockReviews from '../../test-data/mock-reviews';

const REVIEWS: Review[] = mockReviews;

it(`ReviewsList renders correctly`, () => {
  const tree = renderer
  .create(
      <MovieReviews reviews={REVIEWS} />, {
        createNodeMock: () => document.createElement(`div`)
      })
.toJSON();
  expect(tree).toMatchSnapshot();
});

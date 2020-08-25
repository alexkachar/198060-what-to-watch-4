import * as React from 'react';

import ReviewCard from '../review-card/review-card';
import Review from '../../interfaces/review';

interface Props {
  reviews: Review[];
}

const MovieReviews = (props: Props) => {

  const {reviews} = props;

  return (
    <div className="movie-card__reviews movie-card__row">

      <div className="movie-card__reviews-col">

        {reviews.map((review) => <ReviewCard review={review} key={review.id} />)}

      </div>
    </div>
  );
};

export default MovieReviews;

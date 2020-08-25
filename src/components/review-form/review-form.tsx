import * as React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {AppRoutes} from '../../constants';
import {getMovieById} from '../../store/reducers/ui/selectors';
import Logo from '../partials/logo/logo';
import UserBlock from '../partials/user-block/user-block';
import Breadcrumbs from '../partials/breadcrumbs/breadcrumbs';
import Loader from '../loader/loader';
import Movie from '../../interfaces/movie';

interface Props {
  movieId: number | string;
  movie: Movie;
  isAuth: boolean;
}

class ReviewForm extends React.PureComponent <Props> {

  render() {

    const {isAuth, movie} = this.props;

    if (!isAuth) {
      return <Redirect to={AppRoutes.LOGIN} />;
    }

    if (!movie) {
      return <Loader />;
    }

    const {
      id,
      title,
      backgroundImage,
      backgroundColor,
      posterImage
    } = movie;

    return (
      <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>

        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">

            <Logo />

            <Breadcrumbs id={id} movieTitle={title} />

            <UserBlock />
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={posterImage} alt={title} width={218} height={327} />
          </div>

        </div>
        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input className="rating__input" id="star-1" type="radio" name="rating" defaultValue={1} />
                <label className="rating__label" htmlFor="star-1">Rating 1</label>
                <input className="rating__input" id="star-2" type="radio" name="rating" defaultValue={2} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>
                <input className="rating__input" id="star-3" type="radio" name="rating" defaultValue={3} defaultChecked />
                <label className="rating__label" htmlFor="star-3">Rating 3</label>
                <input className="rating__input" id="star-4" type="radio" name="rating" defaultValue={4} />
                <label className="rating__label" htmlFor="star-4">Rating 4</label>
                <input className="rating__input" id="star-5" type="radio" name="rating" defaultValue={5} />
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>
            <div className="add-review__text" style={{background: `rgba(0,0,0,.26)`}}>
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" defaultValue={``} />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: getMovieById(state),
});

export default connect(mapStateToProps, null)(ReviewForm);

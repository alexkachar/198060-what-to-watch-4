import * as React from 'react';
import {connect} from 'react-redux';

import SvgInjection from '../partials/svg-injection/svg-injection';
import Footer from '../footer/footer';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';
import Movie from '../../interfaces/movie';
import {getMovies, getMovieById} from '../../store/reducers/data/selectors';
import {reduceMovies, filterMoviesByGenre, excludeMovieById} from '../../utils';
import DataActionCreator from '../../store/actions/data/data';
import {RECOMENDED_MOVIES_LIMIT} from '../../constants';
interface Props {
  movieId: string;
  movie: Movie;
  movies: Movie[];
  onSetMovieId: (movieId: number | string) => void;
}

class MoviePage extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onSetMovieId, movieId} = this.props;
    onSetMovieId(movieId);
  }

  componentDidUpdate(prevProps) {
    const {onSetMovieId, movieId} = this.props;

    if (movieId !== prevProps.offerId) {
      onSetMovieId(movieId);
    }
  }

  _getRecomendedMovies(movies, genre) {
    const {movieId} = this.props;
    const otherMovies = excludeMovieById(movies, parseInt(movieId, 10));
    const sameGenreMovies = filterMoviesByGenre(otherMovies, genre);
    const reducedMovies = reduceMovies(sameGenreMovies, RECOMENDED_MOVIES_LIMIT);
    return reducedMovies;
  }

  render() {
    if (!this.props.movie) {
      return <div>Loading...</div>;
    }

    const {movie, movies, movieId} = this.props;
    const {
      title,
      genre,
      posterImage,
      previewImage,
      backgroundImage,
      backgroundColor,
      videoLink,
      previewVideoLink,
      description,
      rating,
      scoresCount,
      director,
      starring,
      runTime,
      released,
      isFavorite,
    } = movie;

    const recomendedMovies = this._getRecomendedMovies(movies, genre);

    return (
      <div>
        <SvgInjection />
        <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>
            <Header />
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={`${title} poster`} width={218} height={327} />
              </div>
              <div className="movie-card__desc">
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>
                <div className="movie-rating">
                  <div className="movie-rating__score">{rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">Very good</span>
                    <span className="movie-rating__count">{`${scoresCount} ratings`}</span>
                  </p>
                </div>
                <div className="movie-card__text">
                  <p>{description}</p>
                  <p className="movie-card__director"><strong>{`Director: ${director}`}</strong></p>
                  <p className="movie-card__starring"><strong>{`Starring: ${starring.map((actor) => actor).join(`, `)}`}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList movies={recomendedMovies} />
          </section>
          <Footer />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => ({
  movie: getMovieById(state),
  movies: getMovies(state),
});

const mapDispatchToProps = (dispatch) => ({

  onSetMovieId: (movieId) => {
    const newMovieId = parseInt(movieId, 10);
    dispatch(DataActionCreator.setMovieId(newMovieId));
  },

});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

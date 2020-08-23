import * as React from 'react';
import {connect} from 'react-redux';

import Footer from '../footer/footer';
import MoviesList from '../movies-list/movies-list';
import Header from '../header/header';

import {getMovies} from '../../store/reducers/data/selectors';
import {getMovieById} from '../../store/reducers/ui/selectors';
import {getAuthFlag} from '../../store/reducers/user/selectors';
import UiActionCreator from '../../store/actions/ui/ui';

import {reduceMovies, filterMoviesByGenre, excludeMovieById} from '../../utils';
import {RECOMENDED_MOVIES_LIMIT} from '../../constants';

import Movie from '../../interfaces/movie';
import MovieInfo from '../movie-info/movie-info';
interface Props {
  movieId: string;
  movie: Movie;
  movies: Movie[];
  isAuth: boolean;
  onSetMovieId: (movieId: number | string) => void;
}

class MoviePage extends React.PureComponent<Props> {

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

    const {movie, movies, isAuth} = this.props;
    const {
      title,
      genre,
      posterImage,
      backgroundImage,
      backgroundColor,
      released,
    } = movie;

    const recomendedMovies = this._getRecomendedMovies(movies, genre);

    return (
      <div>
        <section className="movie-card movie-card--full" style={{backgroundColor: `${backgroundColor}`}}>
          <div className="movie-card__hero">
            <div className="movie-card__bg">
              <img src={backgroundImage} alt={title} />
            </div>
            <Header isFavoritesHeader={false} />
            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{title}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>
                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 21 19" width={21} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                  {isAuth && <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width={19} height={20}>
                      <use xlinkHref="#add" />
                    </svg>
                    <span>My list</span>
                  </button>}
                  {isAuth && <a href="add-review.html" className="btn movie-card__button">Add review</a>}
                </div>
              </div>
            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">

            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={`${title} poster`} width={218} height={327} />
              </div>

              <MovieInfo movie={movie} />

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
  isAuth: getAuthFlag(state)
});

const mapDispatchToProps = (dispatch) => ({

  onSetMovieId: (movieId) => {
    const newMovieId = parseInt(movieId, 10);
    dispatch(UiActionCreator.setMovieId(newMovieId));
  },

});

export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);

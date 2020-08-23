import * as React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import DataOperation from '../../store/operations/data/data';
import {getFavorites} from '../../store/reducers/data/selectors';
import {getAuthFlag} from '../../store/reducers/user/selectors';
import {AppRoutes} from '../../constants';

import SvgInjection from '../partials/svg-injection/svg-injection';
import Header from '../header/header';
import Footer from '../footer/footer';
import MovieCard from '../movie-card/movie-card';
import Movie from '../../interfaces/movie';

interface Props {
  onRequestFavorites: () => void;
  favorites: Movie[];
  isAuth: boolean;
}

class Favorites extends React.PureComponent<Props> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onRequestFavorites} = this.props;
    onRequestFavorites();
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={AppRoutes.MAIN} />;
    }

    const {favorites} = this.props;
    return (
      <>
        <SvgInjection />

        <div className="user-page">

          <Header isFavoritesHeader={true} />
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            {favorites.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

          </section>
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  isAuth: getAuthFlag(state)
});

const mapDispatchToProps = (dispatch) => ({
  onRequestFavorites: () => {
    dispatch(DataOperation.loadFavorites());
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

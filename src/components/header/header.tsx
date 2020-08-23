import * as React from 'react';
import {Link} from 'react-router-dom';
import {AppRoutes, AVATAR_BASE} from '../../constants';
import {connect} from 'react-redux';
import {getAuthFlag, getUser} from '../../store/reducers/user/selectors';
import User from '../../interfaces/user';

interface Props {
  user: User;
  isAuth: boolean;
  isFavoritesHeader: boolean;
}

const Header = (props: Props) => {
  const {isAuth, user, isFavoritesHeader} = props;

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className={`page-header ${isFavoritesHeader ? `user-page__head` : `movie-card__head`}`}>
        <div className="logo">
          <Link to={AppRoutes.MAIN} className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {isFavoritesHeader && <h1 className="page-title user-page__title">My list</h1>}

        <div className="user-block">
          {isAuth
            ? <Link to={AppRoutes.FAVORITES} className="user-block__avatar" style={{textDecoration: `none`}}>
              <img src={`${AVATAR_BASE}${user.avatarUrl}`} style={{borderRadius: `50%`, width: `63px`, height: `63px`}} />
            </Link>
            : <Link to={AppRoutes.LOGIN} className="user-block__link">Sign in</Link>
          }
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state),
  isAuth: getAuthFlag(state)
});

export default connect(mapStateToProps, null)(Header);

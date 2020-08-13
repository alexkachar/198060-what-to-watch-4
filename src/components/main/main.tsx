import * as React from 'react';

import MovieCardBig from '../movie-card-big/movie-card-big';
import Catalog from '../catalog/catalog';

const Main = () => (
  <div>
    <MovieCardBig />
    <div className="page-content">
      <Catalog /> 
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </div>
);

export default Main;

import * as React from 'react';

import MovieCardBig from '../movie-card-big/movie-card-big';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

const Main = () => (
  <div>
    <MovieCardBig />
    <div className="page-content">
      <Catalog /> 
      <Footer />
    </div>
  </div>
);

export default Main;

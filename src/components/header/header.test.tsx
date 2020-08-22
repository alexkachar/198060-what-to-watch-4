import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../../test-data/mock-store';

import Header from './header';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

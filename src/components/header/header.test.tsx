import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import Header from './header';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

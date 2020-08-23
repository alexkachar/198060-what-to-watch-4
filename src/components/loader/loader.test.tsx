import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Loader from './loader';

it(`Loader renders correctly`, () => {
  const tree = renderer
    .create(
        <Loader />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Catalog from './catalog';

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
        <Catalog />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

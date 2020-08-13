
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import App from './app';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(
          <App />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

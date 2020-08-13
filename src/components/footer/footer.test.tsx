import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Footer from './footer';

it(`Footer renders correctly`, () => {
  const tree = renderer
    .create(
        <Footer />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Header from './header';

it(`Header renders correctly`, () => {
  const tree = renderer
    .create(
        <Header />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

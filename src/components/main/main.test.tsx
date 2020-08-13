
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Main from './main';

it(`Main renders correctly`, () => {
  const tree = renderer
    .create(
          <Main />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

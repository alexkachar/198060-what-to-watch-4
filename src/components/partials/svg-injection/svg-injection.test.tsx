import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SvgInjection from './svg-injection';

it(`SvgInjection renders correctly`, () => {
  const tree = renderer
    .create(
        <SvgInjection />, {
          createNodeMock: () => document.createElement(`div`)
        })
    .toJSON();
  expect(tree).toMatchSnapshot();
});

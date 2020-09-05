import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import withPlayerControls from './with-player-controls';

const MockComponent = () => <div />;
const WrappedComponent = withPlayerControls(MockComponent);
configure({adapter: new Adapter()});

describe(`withPlayerControls hoc e2e tests`, () => {
  const wrapper = mount(
      <WrappedComponent />);

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`isPlaying`)).toBe(false);
    expect(wrapper.state(`progress`)).toBe(0);
    expect(wrapper.state(`playTime`)).toBe(0);
    expect(wrapper.state(`duration`)).toBe(0);
  });


});

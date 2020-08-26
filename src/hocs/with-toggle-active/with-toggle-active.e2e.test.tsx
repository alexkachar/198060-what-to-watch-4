import * as React from 'react';
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withToggleActive from './with-toggle-active';

Enzyme.configure({adapter: new Adapter()});

describe(`withToggleActive hoc`, () => {

  const MockComponent = () => <div />;
  const MockComponentWrapped = withToggleActive(MockComponent);
  const wrapper = Enzyme.shallow(<MockComponentWrapped />);

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`isActive`)).toBe(false);
  });

  it(`isActive changes correctly to true`, () => {
    wrapper.instance()._handleSetActive();
    expect(wrapper.state(`isActive`)).toBe(true);
  });

  it(`isActive changes correctly to false`, () => {
    wrapper.instance()._handleSetInactive();
    expect(wrapper.state(`isActive`)).toBe(false);
  });

});

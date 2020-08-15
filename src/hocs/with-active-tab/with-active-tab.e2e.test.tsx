import * as React from 'react';
import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import withActiveTab from './with-active-tab';
import {MovieTabs} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

describe(`withActiveTab hoc e2e test`, () => {

  const MockComponent = () => <div />;
  const MockComponentWrapped = withActiveTab(MockComponent);
  const wrapper = Enzyme.shallow(<MockComponentWrapped />);

  it(`intial state set correctly`, () => {
    expect(wrapper.state(`activeTab`)).toBe(MovieTabs.OVERVIEW);
  });

  it(`activeTab changes correctly to a given value`, () => {
    wrapper.instance()._handleTabSwitch(MovieTabs.DETAILS);
    expect(wrapper.state(`activeTab`)).toBe(MovieTabs.DETAILS);
  });

});

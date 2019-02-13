import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SubTitle from "./index";

configure({ adapter: new Adapter() });

describe('Test SubTittle component', () => {
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<SubTitle/>);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });
});
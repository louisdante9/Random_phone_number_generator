import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sorter from "./index";

configure({ adapter: new Adapter() });

describe('Test Sorter component', () => {
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      phoneNumbers: [],
      onChange: () => {}
    };
    shallowComponent = shallow(<Sorter {...defaultProps} />)
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });

  test('should render fields', () => {
    shallowComponent.setProps({
      phoneNumbers : ['234235', '233244']
    });
    expect(shallowComponent.find('span').text()).toContain('Sort by');
    expect(shallowComponent.find('option').at(0).text()).toContain('Ascending');
    expect(shallowComponent.find('option').at(1).text()).toContain('Descending');
  });
});
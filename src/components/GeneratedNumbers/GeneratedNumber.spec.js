import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GeneratedNumbers from "./index";

configure({ adapter: new Adapter() });

describe('Test GeneratedNumbers component', () => {
  let shallowComponent;
  let defaultProps;

  beforeEach(() => {
    defaultProps = {
      phoneNumbers: []

    };
    shallowComponent = shallow(<GeneratedNumbers {...defaultProps} />);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });

  test('should text when there is no phone number', () => {
    expect(shallowComponent.find('div').find('span').text()).toContain('No phone numbers generated yet')
  });

  test('should show text when there are phone numbers', () => {
    shallowComponent.setProps({
      phoneNumbers : ['234235', '233244']
    });
    expect(shallowComponent.find('div').find('h3').text()).toContain('Generated Numbers')
  });

  test('should render numbers', () => {
    shallowComponent.setProps({
      phoneNumbers : ['234235', '233244']
    });
    expect(shallowComponent.find('div').find('ul').text()).toContain('234235')
  });
});
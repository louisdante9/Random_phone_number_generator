import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NumberInput from "./index";

configure({ adapter: new Adapter() });

describe('Test NumberInput Component', () => {
  let shallowComponent;
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      onClick: () => {},
      onChange: () => {}
    };
    shallowComponent = shallow(<NumberInput {...defaultProps} />);
  });

  test('should render once', () => {
    expect(shallowComponent.length).toEqual(1)
  });
});
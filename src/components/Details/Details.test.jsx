import React from 'react';
import { shallow } from 'enzyme';
import Details from './Details';

describe('Details component', () => {
  it('renders Details', () => {
    const wrapper = shallow(<Details 
      name="Dana Scully" 
      occupation="FBI Agent"
      status="Alive"
      image="https://vignette.wikia.nocookie.net/x-files/images/3/31/TXF_Scully.jpg/revision/latest/scale-to-width-down/310?cb=20171214040235"
      description="Dana Katherine Scully (Played by Gillian Anderson) is an FBI Special Agent and medical doctor with a background in hard science who brought her scientific expertise and perspective to the X-files."
      portrayedBy="Gillian Anderson"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

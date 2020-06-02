import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('List component', () => {
  it('renders List', () => {
    const wrapper = shallow(<List
      name="Fox Mulder"
      occupation="FBI Agent"
      status="Alive"
      image="https://vignette.wikia.nocookie.net/x-files/images/c/c0/TXF_Mulder.jpg/revision/latest/scale-to-width-down/310?cb=20171214040226"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/js/components/container/App';
import NavBar from '../src/js/components/presentational/nav-bar-container';
import Grid from '../src/js/components/presentational/grid';

describe('Grid Component', () => {
  const props = {
  }
    
  it('should render the component', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find('.component')).to.have.length(1);
  });

  it('should render the nav bar', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find(NavBar)).to.have.length(1);
  });

  it('should render the grid', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find(Grid)).to.have.length(1);
  });
});

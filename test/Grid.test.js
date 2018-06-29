import React from 'react';
import { Well } from 'react-bootstrap';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Grid from '../src/js/components/presentational/grid';

describe('Grid Component', () => {
  const props = {
    gridItems:[[
      {id:1,images:{downsized:{url:'1.gif'}}},
      {id:1,images:{downsized:{url:'1.gif'}}}
    ],[
      {id:1,images:{downsized:{url:'1.gif'}}},
      {id:1,images:{downsized:{url:'1.gif'}}}]
    ]
  }
    
  it('should render the component', () => {
    const wrapper = shallow(<Grid {...props}/>);
    expect(wrapper.find('.grid--grid')).to.have.length(1);
  });

  it('should render 2 columns', () => {
    const wrapper = shallow(<Grid {...props}/>);
    expect(wrapper.find('.column')).to.have.length(2);
  }); 

  it('should render 4 wells', () => {
    const wrapper = shallow(<Grid {...props}/>);
    expect(wrapper.find(Well)).to.have.length(4);
  });
});

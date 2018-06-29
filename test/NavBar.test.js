import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Button } from 'react-bootstrap';
import NavBar from '../src/js/components/presentational/nav-bar-container';

describe('Grid Component', () => {
    const searchSpy = sinon.spy();
  
    const props = {
        onSearch: searchSpy
    }
    
    it('should render the component', () => {
        const wrapper = shallow(<NavBar {...props}/>);
        expect(wrapper.find('.nav-bar-container--nav-bar')).to.have.length(1);
    });
});

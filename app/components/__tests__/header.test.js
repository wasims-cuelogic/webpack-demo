import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Header from '../common/Header';

describe('Header', () => {

    it('wraps content in a div with .navbar class', () => {
        const header = shallow(<Header />);
        expect(header.find('.navbar').length).toEqual(1);
    });
});

describe('links', () => {
    let wrapper;
    let Links;
    beforeEach(() => {
        wrapper = shallow(<Header />)
        Links = wrapper.find('Link');
    });

    it('renders a link to home', () => {
        const link = Links.first();
        expect(link.childAt(0).text()).toBe('Home');
        expect(link.props().to).toBe('/home');
    });

    it('renders a bank link', () => {
        const link = wrapper
            .findWhere(n => n.props().to === '/bank')        
        expect(link.childAt(0).text()).toBe('Bank')
    });

    it('renders a signin link', () => {
        const link = wrapper
            .findWhere(n => n.props().to === '/signin')        
        expect(link.childAt(0).text()).toBe('SignIn')
    });

    it('renders a signup link', () => {
        const link = wrapper
            .findWhere(n => n.props().to === '/signup')        
        expect(link.childAt(0).text()).toBe('SignUp')
    });
});
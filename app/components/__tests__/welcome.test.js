import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Welcome from '../../containers/welcome';

describe('Welcome', () => {
    it('Welcome renders hello world', () => {
        const welcome = shallow(<Welcome />);
        expect(welcome.find('div').text()).toEqual('Hello world');
    });
});
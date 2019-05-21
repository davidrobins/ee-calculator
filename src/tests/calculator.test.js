import React from 'react';
import Calculator from '../components/calculator';
import { mount } from 'enzyme';

describe('calculator', () => {
    let wrapper;
    let display;
    beforeAll(() => {
        wrapper = mount(<Calculator />)
        display = wrapper.find('#display');
    });

    it('adds a digit to the first val', () => {
        wrapper.find('#digit2').simulate('click');
        expect(display.text()).toEqual('2');
    });

    it('adds a operator to the calculation', () => {
        wrapper.find('#op_plus').simulate('click');
        expect(display.text()).toEqual('2');
    });

    it('adds a second value to the calculation', () => {
        wrapper.find('#digit3').simulate('click');
        expect(display.text()).toEqual('3');
    });

    it('process the  calculation', () => {
        wrapper.find('#op_equals').simulate('click');
        expect(display.text()).toEqual('5');
    });

})

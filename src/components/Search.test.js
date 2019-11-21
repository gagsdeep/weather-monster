import React from 'react';
import {mount} from 'enzyme';
import Search from './Search';

describe("Search Box Tests", () => {
    it('renders without crashing', () => {
        const wrapper = mount(<Search/>);
        console.log(wrapper.debug());
        console.log(wrapper.find('.input_search').length)
        expect(wrapper.find('.input_search').length).toBe(1);
    });

    it('calls onSearchChange on input', () => {
        const onSearchChange = jest.fn();
        const wrapper = mount(<Search onSearchChange={onSearchChange}/>);
        console.log(wrapper.debug());
        const search = wrapper.find('.input_search');
        search.simulate('change', {
            target: {
                value: 'abc'
            }
        })
        expect(onSearchChange.mock.calls.length).toBe(1);
        expect(onSearchChange.mock.calls[0][0]).toBe('abc')
    });

    it('calls onFocus on focus on input', () => {
        const inFocus = jest.fn();
        const wrapper = mount(<Search inFocus={inFocus}/>);
        console.log(wrapper.debug());
        const search = wrapper.find('.input_search');
        search.simulate('focus');
        expect(inFocus.mock.calls.length).toBe(1);
    });

})

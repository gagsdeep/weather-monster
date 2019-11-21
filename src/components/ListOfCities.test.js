import React from 'react';
import {mount} from 'enzyme';
import ListOfCities from './ListOfCities';

const cities = [
    {
        id: 1,
        name: 'aaa'
    }, {
        id: 2,
        name: 'bbb'
    }
];
const onSelect = jest.fn();

describe("ListOfCities Tests", () => {
    it('renders without crashing', () => {
        const wrapper = mount(<ListOfCities cities={cities}/>);
        expect(wrapper)
            .not
            .toBeNull();
    });

    it('shows passed cities ', () => {
        const wrapper = mount(<ListOfCities cities={cities}/>);
        const citySpans = wrapper.find('span');
        expect(citySpans.length).toBe(cities.length);
    });

    it('calls on Select on clicking city', () => {
        const wrapper = mount(<ListOfCities cities={cities} onSelect={onSelect}/>);
        const citySpan = wrapper.first('span');

        citySpan.simulate('click');
        expect(onSelect.mock.calls.length).toBe(1);
        expect(onSelect.mock.calls[0][0]).toBe(cities[0].name);

    });

})

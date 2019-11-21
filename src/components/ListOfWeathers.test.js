import React from 'react';
import {mount} from 'enzyme';
import {ListOfWeathers} from './ListOfWeathers';

const favorites = [
    {
        name: 'aaa',
        max_temp: 28,
        min_temp: 5
    }, {
        name: 'bbb',
        max_temp: 38,
        min_temp: 15
    }
];

describe("ListOfCities Tests", () => {
    it('renders without crashing', () => {
        const wrapper = mount(<ListOfWeathers favorites={favorites}/>);
        expect(wrapper)
            .not
            .toBeNull();
    });

    it('shows passed favorite cities ', () => {
        const wrapper = mount(<ListOfWeathers favorites={favorites}/>);
        const cityDivs = wrapper.find('.weather_item');
        expect(cityDivs.length).toBe(favorites.length);
    });

    it('calls on Select on clicking city', () => {
        const wrapper = mount(<ListOfWeathers favorites={favorites}/>);
        const cityName = wrapper
            .find('div.city_name')
            .at(0);
        const cityTemperature = wrapper.find('div.temperature_row');
        expect(cityName.text()).toBe(favorites[0].name);
        expect(cityTemperature.at(0).text()).toMatch(`${favorites[0].min_temp}`);
        expect(cityTemperature.at(1).text()).toMatch(`${favorites[0].max_temp}`);

    });

})

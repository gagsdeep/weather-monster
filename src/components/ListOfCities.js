import React from 'react';

export default function ListOfCities(props) {
    const {onSelect, cities} = props;

    return (cities.map(city => (
        <span
            className="city_name_bar"
            key={city.id}
            onClick={() => onSelect(city.name)}>
            {city.name}
        </span>

    )));
}
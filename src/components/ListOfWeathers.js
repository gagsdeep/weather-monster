import React from 'react';
import {connect} from 'react-redux';
import {WEATHER} from '../reducers/weather_reducer';

export function ListOfWeathers(props) {

    const onClick = (cityId) => {
        props.dispatch(WEATHER.REMOVE_FAVORITE(cityId))
    }

    const {favorites} = props;
    favorites.sort((first, second) => second.max_temp - first.max_temp);
    return (
        <div className="main_results">
            {favorites.map((item) => {

                return (
                    <div
                        key={item.name}
                        onClick={() => onClick(item.name)}
                        className="weather_item col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="inside_container">
                            <div className="city_name">
                                {item.name}
                            </div>
                            <div className="temperature">
                                <div className="temperature_row">
                                    Min: {item.min_temp}&#176;C
                                </div>
                                <div className="temperature_row">
                                    Max: {item.max_temp}&#176;C
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
}
        </div>
    );
}

export default connect(({favorites}) => ({favorites}))(ListOfWeathers);
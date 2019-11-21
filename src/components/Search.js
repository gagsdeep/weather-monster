import React from 'react';

export default function Search(props) {
    const handleChange = (event) => {
        props.onSearchChange(event.target.value);
    }
    return (
        <div className="main_search">
            <span className="fa fa-search search-icon"></span>
            <input
                className="input_search form-control"
                placeholder="Type the name of a city"
                type="text"
                onChange={handleChange}
                onFocus={props.inFocus}></input>
        </div>
    );

}

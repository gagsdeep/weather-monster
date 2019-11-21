import React from 'react';
import Search from './Search';
import ListOfCities from './ListOfCities';
import {connect} from 'react-redux';
import {WEATHER} from '../reducers/weather_reducer';

export class SearchBox extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            inFocus: false,
            keyword: ''
        }
        this.wrapperRef = React.createRef();
    }

    onSearchChange = (text) => {
        this.setState({keyword: text});
    }

    inFocus = () => {
        this.setState({inFocus: true})
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({inFocus: false});
        }
    }
    onSelect = (name) => {
        const {favorites} = this.props;
        this.setState({inFocus: false})
        const hasInFav = favorites.find((f) => f.name === name);
        if (hasInFav) {
            return;
        }
        const {dispatch} = this.props;
        dispatch(WEATHER.FETCH_WEATHER(name));
    }

    render() {
        const {keyword, inFocus} = this.state;
        const {allCities} = this.props;
        const cities = keyword === ''
            ? allCities
            : allCities.filter(({name}) => name.toLowerCase().includes(keyword.toLocaleLowerCase()))
        return (
            <div className="row">
                <div
                    ref={this.wrapperRef}
                    className=" col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                    <Search onSearchChange={this.onSearchChange} inFocus={this.inFocus}/> {inFocus && <ListOfCities cities={cities} onSelect={this.onSelect}/>
}
                </div>
            </div>
        );

    }

}
export default connect(({allCities, favorites}) => ({allCities, favorites}))(SearchBox);
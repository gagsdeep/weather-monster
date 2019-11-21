import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import './style/App.css';
import './static/bootstrap.css';

// COMPONENTS
import App from './components/App';

// REDUCERS
import reducers from './reducers';
const initialState = {
    allCities: [
        {
            name: 'Hyderabad',
            id: 'hyderabad'
        }, {
            name: 'Bangalore',
            id: 'bangalore'
        }, {
            name: 'Delhi',
            id: 'delhi'
        }, {
            name: 'Mumbai',
            id: 'mumbai'
        }, {
            name: 'Bangkok',
            id: 'bangkok'
        }, {
            name: 'Berlin',
            id: 'berlin'
        }, {
            name: 'Paris',
            id: 'paris'
        }, {
            name: 'New York',
            id: 'newyork'
        }, {
            name: 'Chennai',
            id: 'chennai'
        }, {
            name: 'Dubai',
            id: 'dubai'
        }
    ],
    favorites: []
}

const store = createStore(reducers, initialState, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <div>
        <App/>
    </div>
</Provider>, document.getElementById('root'));
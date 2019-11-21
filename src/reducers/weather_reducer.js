import Config from "../config";

export const WEATHER = {
    ADD_FAVORITE(payload) {
        return {type: 'ADD_FAVORITE', payload}
    },
    FETCH_WEATHER(keyword) {
        return (dispatch) => {
            fetch(`${Config.URL_ROOT}/weather?q=${keyword}&appid=${Config.API_KEY}&units=metric`, {method: 'GET'})
                .then(response => response.json())
                .then((response) => dispatch(WEATHER.ADD_FAVORITE(response)))
        };
    },
    REMOVE_FAVORITE(cityId) {
        return {type: 'REMOVE_FAVORITE', cityId}
    }

};

export default function (state = {}, action) {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const {favorites} = state;
            const city = {
                name: action.payload.name,
                min_temp: action.payload.main.temp_min,
                max_temp: action.payload.main.temp_max
            };
            const newFav = [
                ...favorites,
                city
            ];
            return {
                ...state,
                favorites: newFav
            };
        case 'REMOVE_FAVORITE':
            const {favorites: favs} = state;
            const newfavorites = favs.filter((item) => item.name !== action.cityId);

            return {
                ...state,
                favorites: newfavorites
            }

        default:
            return {
                ...state
            };
    }
}
import { combineReducers } from 'redux';
import { TvShowsReducer } from './Reducers/TvShowsReducer';
import { HeaderMenuReducer } from './Reducers/HeaderMenuReducer'

const allReducers = {
    TvShowsReducer,
    HeaderMenuReducer
};

export const RootReducer = combineReducers(allReducers);
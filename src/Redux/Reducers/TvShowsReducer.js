import * as Constants from '../../Constants/Constants.js'

const initialState = {
    tvShows: []
};

export const TvShowsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.UPDATE_TV_SHOWS:
            const tvShows = Object.assign({}, state, { tvShows: action.payload.newTvShows })
            return tvShows;
        default:
            return state;
    }
};
import * as Constants from '../../Constants/Constants.js'

const initialState = {
    selectedMenu: '/home'
};

export const HeaderMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.CHANGE_SELECTED_MENU:
            const selectedMenu = Object.assign({}, state, { selectedMenu: action.payload.selectedMenu })
            return selectedMenu;
        default:
            return state;
    }
};
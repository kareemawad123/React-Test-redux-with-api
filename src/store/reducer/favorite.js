

const INTIAL_STATE = {
    favorite: [],
};


export default function favoritesReducer(state = INTIAL_STATE, action) {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                favorite: [action.payload, ...state.favorite]
            }
        case 'DELETE_FAVORITE':
            let index = state.favorite.indexOf(action.payload);
            state.favorite.splice(index, 1);
            return {
               ...state,
                favorite: [...state.favorite]
            }
        default:
            return state;
    }
}


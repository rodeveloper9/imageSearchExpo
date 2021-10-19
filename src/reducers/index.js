import constants from '../constants/';

const initialState = {
    listData: [],
    listLoadiing: false
};
const ListingReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.LIST.GET_LIST:
            return {
                ...state,
                listData: action.payload,
                listLoadiing: false
            };

        case constants.LIST.EMPTY_LIST:
            return {
                ...state,
                listData: action.payload,
                listLoadiing: false
            };

        case constants.LIST.LIST_PENDING:
            return {
                ...state,
                listLoadiing: true
            };

        case constants.LIST.LIST_ERROR:
            return {
                ...state,
                listLoadiing: false
            };

        default:
            return state;
    }
}

export default ListingReducer;
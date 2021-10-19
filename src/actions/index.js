import constants from '../constants/';
const API_UL = 'https://pixabay.com/api/?key=23813802-e530eb9b9ae6fd1603df1fe73';

const getList = (query) => {
    try {
        return async dispatch => {
            const finalUrl = `${API_UL}&q=${encodeURI(query)}`;
            dispatch(pendingList());
            const result = await fetch(finalUrl, {
                method: 'GET'
            })
            const json = await result.json();
            if (json) {
                dispatch({
                    type: constants.LIST.GET_LIST,
                    payload: json
                });
            }
            else {
                console.log('unable to fetch')
            }
        }
    } catch (error) {
        console.log(error);
        dispatch(errorList(error));
    }
}

const emptyList = () => {
    return async dispatch => {
        dispatch({
            type: constants.LIST.EMPTY_LIST,
            payload: []
        });
    };
}

const pendingList = () => {
    return async dispatch => {
        dispatch({
            type: constants.LIST.LIST_PENDING,
        });
    };
}

const errorList = (error) => {
    return async dispatch => {
        dispatch({
            type: constants.LIST.LIST_ERROR,
            payload: error
        });
    };
}

export {
    getList, emptyList, pendingList, errorList
};
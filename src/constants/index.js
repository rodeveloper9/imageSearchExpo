/**
 * Actions for Redux used across application.
 */
const actions = (() => {
    return {
        LIST: {
            GET_LIST: 'GET_LIST',
            EMPTY_LIST: 'EMPTY_LIST',
            LIST_PENDING: 'LIST_PENDING',
            LIST_SUCCESS: 'LIST_PENDING',
            LIST_ERROR: 'LIST_ERROR',
        }
    };
})();

export default actions;

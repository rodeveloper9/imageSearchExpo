import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import listReducer from '../reducers/';
const rootReducer = combineReducers(
    { listReducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;
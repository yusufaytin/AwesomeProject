import { combineReducers } from 'redux';
import todoReducer from './todoReducer'

const appReducer = combineReducers({
    todoReducer: todoReducer,
});

// const rootReducer = (state, action) => appReducer(state, action);

export default appReducer;
import { applyMiddleware, combineReducers, createStore } from "redux";
import imageReducer from "./image-reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    imageData: imageReducer
})

let store = createStore(reducers, applyMiddleware(thunk))
export default store
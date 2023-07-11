import { combineReducers } from "redux-immutable";
import { PokesReducer } from ".";
import { uiReducer } from "./ui";

const rootReducer= combineReducers({
    data:PokesReducer,
    ui:uiReducer,
});

export {rootReducer};
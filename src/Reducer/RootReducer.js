import { combineReducers } from "redux";
import dataReducer  from "../Slices/DataSlice";
import UiReducer from "../Slices/UiSlice";

const rootReducer= combineReducers({
    data:dataReducer,
    ui:UiReducer,
});

export {rootReducer};
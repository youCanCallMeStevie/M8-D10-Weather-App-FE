import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import weatherReducer from "./reducers/weatherReducer";
import alertReducer from "./reducers/alertReducer";
import userReducer from "./reducers/userReducer";

const rootReducer= combineReducers({
    weather: weatherReducer,
    alert: alertReducer,
    user: userReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState= ReturnType<typeof rootReducer>;

export default store;
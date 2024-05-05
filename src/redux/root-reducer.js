import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/auth-slice";
import { themeReducer } from "./theme/theme-slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token', 'selectedTheme']
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    theme: persistedThemeReducer
})

export default rootReducer;
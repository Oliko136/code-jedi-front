import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/auth-slice';
import { themeReducer } from './theme/theme-slice';
import { needhelpReducer } from './needhelp/needhelpSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'selectedTheme'],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedneedhelpReducer = persistReducer(persistConfig, needhelpReducer);

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  theme: persistedThemeReducer,
  needhelp: persistedneedhelpReducer,
});

export default rootReducer;

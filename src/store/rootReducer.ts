import { combineReducers, configureStore } from '@reduxjs/toolkit';

import coursesReducer from './courses/reducer';
import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';

export const rootReducer = combineReducers({
	coursesState: coursesReducer,
	user: userReducer,
	authorsState: authorsReducer,
});

export const store = configureStore({ reducer: rootReducer });

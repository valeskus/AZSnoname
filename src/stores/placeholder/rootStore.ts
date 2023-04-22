import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {placeholderReducer} from './placeholderReducer';

const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({reducer: rootReducer});

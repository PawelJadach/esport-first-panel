import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import authReducer, { initialState as authInitialState } from './features/auth';
import userReducer, {
  initialState as userInitialState,
} from './features/users';
import personReducer, {
  initialState as personInitialState,
} from './features/persons';
import newsletterReducer, {
  initialState as newsletterInitialState,
} from './features/newsletter';

const initialState = {
  auth: authInitialState,
  users: userInitialState,
  persons: personInitialState,
  newsletter: newsletterInitialState,
};

const rootReducer = combineReducers({
  auth: authReducer,
  users: userReducer,
  persons: personReducer,
  newsletter: newsletterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['persisted'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
  middleware: [thunk],
});

export const persistor = persistStore(store);

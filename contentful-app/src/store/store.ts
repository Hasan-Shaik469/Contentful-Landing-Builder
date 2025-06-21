import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import layoutReducer from '../features/layout/layoutSlice';
import historyReducer from '../features/history/historySlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['layout'],
};

const rootReducer = {
  layout: layoutReducer,
  history: historyReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
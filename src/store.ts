import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { placesApi } from "./features/places/placesApi";
import placesReducer from "./features/places/placesSlice";

const rootReducer = combineReducers({
  [placesApi.reducerPath]: placesApi.reducer,
  places: placesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["places"], // Only persist the places slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(placesApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

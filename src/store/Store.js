import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import DataSlice from "./DataSlice";

const reducers = combineReducers({
    data: DataSlice
})

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store)

export { store, persistor}
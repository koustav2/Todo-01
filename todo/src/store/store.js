/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER,REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'root',
    version:1,
    storage,
}
const persistedReducer= persistReducer(persistConfig, todoReducer)
export const store = configureStore({
    reducer: {todos:persistedReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER,REHYDRATE],
        },
    }),


})
export const persistor = persistStore(store)


// ,
// devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
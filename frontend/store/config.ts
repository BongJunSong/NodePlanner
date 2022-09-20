// import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';

// // import rootReducer from '../reducers';

// const logger = createLogger();

// const initialState = {};

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== 'production',
//   preloadedState: initialState,
//   enhancers: (defaultEnhancers) => [...defaultEnhancers],
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export default store;

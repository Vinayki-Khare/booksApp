// store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './bookSlice';
import authReducer from './AuthSlice'; // Import authReducer

const store = configureStore({
  reducer: {
    books: bookReducer,
    auth: authReducer, // Add authReducer to the store
    // Add more reducers as needed
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import applicationSlice from './reducers/applicationSlice';
import intlSlice from './reducers/intlSlice';

const store = configureStore({
  reducer: {
    application: applicationSlice,
    intl: intlSlice,
  },
});

export default store;

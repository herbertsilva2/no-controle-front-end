
import { configureStore } from '@reduxjs/toolkit';
import contaSlice from './slices/contaSlice';

export default configureStore({
  reducer: {
    conta: contaSlice
  }
});
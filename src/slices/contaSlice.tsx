import { createSlice } from '@reduxjs/toolkit';
import { consultarConta } from '../services/api';

const initialState = {
  saldo: 0,
  status: 'idle',
  error: null
};

const contaSlice = createSlice({
  name: 'conta',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(consultarConta.fulfilled, (state, action) => {
      state.saldo = action.payload;
    });
  }  
});

const getSaldo = (state: any) => state.conta.saldo;

// export const { addUser } = usersSlice.actions;
export { getSaldo };
export default contaSlice.reducer;
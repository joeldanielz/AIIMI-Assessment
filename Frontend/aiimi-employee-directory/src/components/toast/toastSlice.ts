import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ToastState {
  toastText: string;
  isOpen: boolean;
}

const initialState: ToastState = {
  toastText: "",
  isOpen: false,
};

export const showToast = createAsyncThunk<void, string>(
  "toast/showToast",
  async (text : string, { dispatch }) => {
    dispatch(setToastText(text));
    await new Promise((resolve) => setTimeout(resolve, 5000));
    dispatch(clearToast());
  }
);


export const toastSlice = createSlice({
  name: "toast",
  initialState: initialState,
  reducers: {
    setToastText: (state, action: PayloadAction<string>) => {
      state.toastText = action.payload;
      state.isOpen = true;
    },
    clearToast: (state) => {
      state.toastText = "";
      state.isOpen = false;
    },
  },
});


export const { setToastText, clearToast } = toastSlice.actions;
export const selectToast = (state: RootState) => state.toast;
export default toastSlice.reducer;

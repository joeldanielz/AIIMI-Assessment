import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface ToastState {
  toastText: string;
  isOpen: boolean;
}

const initialState: ToastState = {
  toastText: "",
  isOpen: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: initialState,
  reducers: {
  },
});

export const selectToast = (state: RootState) => state.toast;
export default toastSlice.reducer;

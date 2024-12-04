import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./components/employee-list/employeesSlice";
import toastReducer from "./components/toast/toastSlice";

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    toast: toastReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EmployeeDTO } from "../../types/EmployeeDTO";
import { AppThunk, RootState } from "../../store";
import { addEmployeeApi, fetchEmployeesApi } from "../../services/EmployeeApiService";

export interface EmployeesState {
  employees: EmployeeDTO[];
  loading: boolean;
  error: any;
}

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchEmployeesApi();
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export const addEmployee = createAsyncThunk<EmployeeDTO, EmployeeDTO>(
  "employees/addEmployee",
  async (employee, { rejectWithValue }) => {
    try {
      return await addEmployeeApi(employee); // Calls API service to add the employee
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: EmployeesState = {
  employees: [],
  loading: true,
  error: null,
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addEmployee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.employees.push(action.payload); // Add the new employee to the state
      })
      .addCase(addEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const selectEmployees = (state: RootState) => state.employees;
export default employeesSlice.reducer;

import { EmployeeDTO } from "../types/EmployeeDTO";

const API_URL = "https://localhost:7020/employee"; // Replace with your actual API URL

// Fetch employees from the API (GET request)
export const fetchEmployeesApi = async (): Promise<EmployeeDTO[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }
  return await response.json();
};

// Add a new employee to the API (POST request)
export const addEmployeeApi = async (employee: EmployeeDTO): Promise<EmployeeDTO> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Failed to add employee");
  }

  return await response.json();
};

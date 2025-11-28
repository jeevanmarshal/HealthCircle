// src/api/authApi.js
import API from "../api/axiosConfig";

// 🔹 Signup API
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/auth/signup", userData);
    return response.data; 
  } catch (error) {
    throw error.response?.data || { message: "Network Error" };
  }
};

// 🔹 Login API
export const loginUser = async (loginData) => {
  try {
    const response = await API.post("/auth/login", loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Network Error" };
  }
};

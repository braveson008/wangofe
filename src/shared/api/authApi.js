import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const login = async (email, carPlateNumber) => {
  const response = await axios.post(`${API_BASE_URL}/api/clients/login`, {
    email,
    carPlateNumber,
  });
  if (response.status !== 200) {
    throw new Error("Login failed");
  }
  return response.data;
};

export const register = async (email, fullname, carPlateNumber, address) => {
  const response = await axios.post(`${API_BASE_URL}/api/clients/register`, {
    email,
    fullName: fullname,
    carPlateNumber,
    address,
  });
  if (response.status !== 200) {
    throw new Error("Registration failed");
  }
  return response.data;
};

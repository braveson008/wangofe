import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCities = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/cities`);
  return response.data;
};

export const fetchAreas = async (cityName) => {
  const response = await axios.get(
    `${API_BASE_URL}/api/cities/${cityName}/areas`
  );
  return response.data;
};

export const startParking = async (clientId, city, area) => {
  const response = await axios.post(`${API_BASE_URL}/api/parking/start`, {
    clientId,
    cityName: city,
    areaName: area,
  });
  return response.data;
};

export const getParkingHistory = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/api/parking/${userId}`);
  return response.data;
};

export const endParking = async (parkingId) => {
  const response = await axios.post(`${API_BASE_URL}/api/parking/stop`, {
    parkingId,
  });
  return response.data;
};

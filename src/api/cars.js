import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCars = async (page = 1, limit = 12) => {
  const response = await axiosInstance.get(`/cars?page=${page}&limit=${limit}`);
  return response.data;
};

export const getCarById = async (id) => {
  const response = await axiosInstance.get(`/cars/${id}`);
  return response.data;
};

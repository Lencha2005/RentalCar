import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCars = async (page = 1, limit = 12, filters) => {
  const queryParams = {
    page,
    limit,
    ...(filters.brand ? { brand: filters.brand } : {}),
    ...(filters.rentalPrice ? { rentalPrice: filters.rentalPrice } : {}),
  };
  const response = await axiosInstance.get("/cars", { params: queryParams });
  return response.data;
};

export const getCarById = async (id) => {
  const response = await axiosInstance.get(`/cars/${id}`);
  return response.data;
};

export const getBrands = async () => {
  const response = await axiosInstance.get("/brands");
  return response.data;
};

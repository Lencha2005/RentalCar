import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://car-rental-api.goit.global/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCars = async (page = 1, limit = 12, filters) => {
  console.log('before:', {page, limit, ...filters});
  const response = await axiosInstance.get('/cars', {
    params: { 
      page, 
      limit,
      ...(filters.brand ? { brand: filters.brand } : {}),
      ...(filters.rentalPrice ? { rentalPrice: filters.rentalPrice } : {}),
      ...(filters.mileage ? { mileage: filters.mileage } : {})
    }});
    console.log("response.data:", response.data);
  return response.data;
};

export const getCarById = async (id) => {
  const response = await axiosInstance.get(`/cars/${id}`);
  return response.data;
};

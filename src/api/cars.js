import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://car-rental-api.goit.global/",
    headers: {
        'Content-Type': 'application/json',
      },
});

export const getCars = async () => {
    const response = await axiosInstance.get("/cars");
    console.log('response: ', response);
    return response.data;
};

export const getCarById = async (id) => {
    const response = await axiosInstance.get(`/cars/${id}`);
    return response.data;
};
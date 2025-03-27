import axios from "axios";

const API_BASE_URL = "http://localhost:2000/weather";

export const getWeatherData = async () => {
    try {
        const response = await axios.get(API_BASE_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return [];
    }
};

export const getWeatherByCity = async (city: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${city}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for ${city}:`, error);
        return [];
    }
};

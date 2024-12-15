// FILE: api.ts
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com"; // Dummy API URL

// GET request function
export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// POST request function
export const postData = async (data: any) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

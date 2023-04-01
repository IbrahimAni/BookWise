import axios from "axios";

const baseUrl = "http://localhost:8080/BookWiseRestful/bookapi";

export const fetchBooks = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
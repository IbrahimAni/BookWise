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

export const addBook = async (book) => {
  try {
    const response = await axios.post(baseUrl, book);
    return response.data;
  } catch (error) {
    console.error('Error creating book:', error);
    return null;
  }
};

export const fetchBook = async (bookId) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        id: bookId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
};

import axios from "axios";

const baseUrl = import.meta.env.VITE_APP_BASEURL;

const getFormat = () => {
  return localStorage.getItem('format');
};

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
    const response = await axios.get(`${baseUrl}?id=${bookId}&format=${getFormat()}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    return null;
  }
};

export const updateBook = async(bookId, book) => {
  try {
    const response = await axios.put(`${baseUrl}?id=${bookId}&format=${getFormat()}`, book);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
}

export const deleteBook = async(bookId) => {
  try {
    const response = await axios.delete(`${baseUrl}?id=${bookId}&format=${getFormat()}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
}

export const searchBook = async(title) => {
  try {
    const response = await axios.get(`${baseUrl}?query=${title}&format=${getFormat()}`  );
    return response.data;
  } catch (error) {
    console.error('Error searching book:', error);
    return [];
  }
}
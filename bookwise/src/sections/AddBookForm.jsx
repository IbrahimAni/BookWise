import React, {useState, useEffect} from 'react';
import { addBook } from '../api';

const AddBookForm= ({showAlert, updateBooks }) => {
  const [book, setBook] = useState({
    id: '0',
    title: '',
    author: '',
    date: '',
    genres: '',
    characters: '',
    synopsis: ''
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
      
  const submitBook = async (e) => {
    e.preventDefault();
    const addedBook = await addBook(book);
    if (addedBook) {
      showAlert("added");
      updateBooks();

      // Reset the form
      setBook({
        id: '0',
        title: '',
        author: '',
        date: '',
        genres: '',
        characters: '',
        synopsis: ''
      });
    }
  };

  return (
    <div className="data-input-section w-full">
      <div className="bg-white shadow rounded p-4 w-full">
        <h2 className="text-xl font-semibold mb-4">Add Book</h2>
        <form id="book-form" action="add-book" method="POST" onSubmit={submitBook}>
          <div className="mb-4">
          <input
            type="text"
            className="form-input w-full p-2 border rounded"
            id="book-id"
            name="id"
            value={book.id}
            hidden
            readOnly
          />
          </div>

          <div className="mb-4">
            <label htmlFor="book-title" className="block text-sm font-semibold mb-1">
              Book Title
            </label>
            <input
              type="text"
              className="form-input w-full p-2 border rounded"
              id="book-title"
              placeholder="Enter book title"
              name="title"
              value={book.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book-author" className="block text-sm font-semibold mb-1">
              Author
            </label>
            <input
              type="text"
              className="form-input w-full p-2 border rounded"
              id="book-author"
              placeholder="Enter author name"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book-date" className="block text-sm font-semibold mb-1">
              Date
            </label>
            <input
              type="date"
              className="form-input w-full p-2 border rounded"
              id="book-date"
              name="date"
              value={book.date}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book-genres" className="block text-sm font-semibold mb-1">
              Genres
            </label>
            <input
              type="text"
              className="form-input w-full p-2 border rounded"
              id="book-genres"
              placeholder="Enter genres"
              name="genres"
              value={book.genres}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book-characters" className="block text-sm font-semibold mb-1">
              Characters
            </label>
            <input
              type="text"
              className="form-input w-full p-2 border rounded"
              id="book-characters"
              placeholder="Enter characters"
              name="characters"
              value={book.characters}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book-synopsis" className="block text-sm font-semibold mb-1">
              Synopsis
            </label>
            <textarea
              className="form-textarea w-full p-2 border rounded"
              id="book-synopsis"
              placeholder="Enter synopsis"
              name="synopsis"
              value={book.synopsis}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm
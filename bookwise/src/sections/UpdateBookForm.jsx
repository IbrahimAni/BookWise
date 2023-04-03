import React, {useState, useEffect} from 'react'
import { fetchBook, updateBook } from '../api';

const UpdateBookForm = ({selectedBookId, showAlert, setView, updateBooks}) => {
  const [book, setBook] = useState(null);

  useEffect(() => {    
    // Fetch the book data based on the book ID and update the book state
    const fetchedBook = async() => {
      const book = await fetchBook(selectedBookId);
      setBook(book);
    }
    fetchedBook();
  }, [selectedBookId]);

  if(!book){
    return <div>Loading...</div>
  }

  const handleInputChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };
  
  const submitBook = async (e) => {
    e.preventDefault();
    
    try {
      await updateBook(selectedBookId, book)
      showAlert("updated");
      setView("bookDetails")
      updateBooks();
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="data-input-section w-full">
      <div className="bg-white shadow rounded p-4 w-full">
        <h2 className="text-xl font-semibold mb-4">Update Book</h2>
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
              value={book.title}
              name="title"
              onChange={handleInputChange}
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
              value={book.author}
              name="author"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="book-date" className="block text-sm font-semibold mb-1">
              Date
            </label>
            <input
              type="text"
              className="form-input w-full p-2 border rounded"
              id="book-date"
              placeholder="Enter Date"
              value={book.date}
              name="date"
              onChange={handleInputChange}
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
              value={book.genres}
              name="genres"
              onChange={handleInputChange}
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
              value={book.characters}
              name="characters"
              onChange={handleInputChange}
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
              value={book.synopsis}
              name="synopsis"
              onChange={handleInputChange}
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

export default UpdateBookForm
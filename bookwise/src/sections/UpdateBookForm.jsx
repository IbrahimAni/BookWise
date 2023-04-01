import React from 'react'

const UpdateBookForm = ({id, title, author, date, genres, characters, synopsis}) => {
  const [bookId, setBookId] = useState({id});

  const handleIdChange = (e) => {
    setBookId(e.target.value);
  };
  
  const submitBook = (e) => {
    e.preventDefault();
    // Add your submit logic here
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
            value={id}
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
              value={title}
              name="title"
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
              value={author}
              name="author"
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
              value={date}
              name="date"
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
              value={genres}
              name="genres"
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
              value={characters}
              name="characters"
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
              value={synopsis}
              name="synopsis"
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
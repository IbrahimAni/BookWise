import React, {useState, useEffect} from 'react'
import { fetchBooks } from '../api';
const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooks = await fetchBooks();
      setBooks(fetchedBooks);
    };
    fetchData();
  }, []);
  
  return (
    <div className="data-display-section">
      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-4">Books List</h2>
        <div className="overflow-x-auto">
          <table className="table-auto min-w-max">
            <thead>
              <tr className="text-left font-semibold">
                <th className="border-b p-2">ID</th>
                <th className="border-b p-2">Title</th>
                <th className="border-b p-2">Author</th>
                <th className="border-b p-2">Date</th>
                <th className="border-b p-2">Genres</th>
                <th className="border-b p-2">Characters</th>
                <th className="border-b p-2">Synopsis</th>
                <th className="border-b p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="border-b p-2 truncate w-16">{book.id}</td>
                  <td className="border-b p-2 truncate w-40">{book.title}</td>
                  <td className="border-b p-2 truncate w-40">{book.author}</td>
                  <td className="border-b p-2 truncate w-32">{book.date}</td>
                  <td className="border-b p-2 truncate w-40">{book.genres}</td>
                  <td className="border-b p-2 truncate w-40">{book.characters}</td>
                  <td className="border-b p-2 truncate w-64">{book.synopsis}</td>
                  <td className="border-b p-2">
                    <a
                      href={`view?id=${book.id}`}
                      className="bg-blue-500 text-white hover:text-white hover:opacity-75 py-1 px-3 rounded"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BooksList
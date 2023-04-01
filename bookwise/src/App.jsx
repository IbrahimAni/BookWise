import { useState, useEffect } from 'react'
import { Navbar, AddBookForm, BooksList, BookDetails } from './sections';
import { BookActionAlert } from './components';
import { fetchBooks, fetchBook } from './api';

function App() {
  const [view, setView] = useState('addBook');
  const [alert, setAlert] = useState({ show: false, action: '' });
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  useEffect(() => {
    updateBooks();
  }, []);

  const updateBooks = async () => {
    const fetchedBooks = await fetchBooks();
    setBooks(fetchedBooks);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleViewBook = (bookId) => {
    setSelectedBookId(bookId);
    setView('bookDetails');
  };

  const showAlert = (action) => {    
    setAlert({ show: true, action: action });
    setTimeout(() => setAlert({ show: false, action: '' }), 3000);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 min-h-screen w-full">
      <BookActionAlert bookAdded={alert.show} action={alert.action} />
      <Navbar onViewChange={handleViewChange} />
      <section className="absolute pt-24 w-full">
        <div className="absolute w-full mx-auto px-4">
          {/* <div className="flex flex-wrap justify-center text-center mb-2">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-black">Bookwise</h2>
              <p className="text-lg leading-relaxed m-4 text-black">
                A simple book management app built with React, Java, and JavaScript.
              </p>
            </div>
          </div> */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
                {view === 'addBook' ? (
                    <>
                      <h4 className="text-2xl font-semibold">Add Book</h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Add a new book to your collection.
                      </p>
                      <AddBookForm showAlert={showAlert} updateBooks={updateBooks} />
                    </>
                  ) : (
                    view === 'bookDetails' && (
                      <>
                        <h4 className="text-2xl font-semibold">View Book</h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                          View the book details.
                        </p>
                        <BookDetails dbook={selectedBookId} />
                      </>
                    )
                  )}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Show All Books</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    View all books in your collection.
                  </p>
                  <BooksList books={books} viewBook={handleViewBook} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

import { useState, useEffect } from 'react'
import { Navbar, AddBookForm, BooksList, BookDetails, UpdateBookForm } from './sections';
import { BookActionAlert } from './components';
import { fetchBooks, fetchBook, searchBook } from './api';

function App() {
  const [view, setView] = useState('addBook');
  const [viewBookList, setViewBookList] = useState('showBooks');
  const [alert, setAlert] = useState({ show: false, action: '' });
  const [books, setBooks] = useState([]);
  const [selectedBookId, setSelectedBookId] = useState(null);

  const updateRightSection = () => {
    setRightSectionUpdate((prev) => prev + 1);
  }

  useEffect(() => {
    updateBooks();
  }, []);

  const searchBookByTitle = async(title) => {
    const fetchedBooks = await searchBook(title);
    setBooks(fetchedBooks);
  }

  const updateBooks = async () => {
    const fetchedBooks = await fetchBooks();
    setBooks(fetchedBooks);
  };

  const handleViewChange = async(newView) => {
    if (newView === 'showBooks') {
      setViewBookList(newView);
      await updateBooks();
    } else if (viewBookList === 'showAllBooks') {
      await updateBooks();
    }
    
    if (newView !== 'showBooks') {
      setView(newView);
    }
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
      <Navbar handleViewChange={handleViewChange} setViewBookList={setViewBookList} setView={setView} searchBookByTitle={searchBookByTitle} updateRightSection={updateRightSection} />
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
                {(selectedBookId === null || view === "addBook") && (
                    <div className="flex-auto p-5 lg:p-10">
                      <h4 className="text-2xl font-semibold">Add Book</h4>
                      <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                        Add a new book to your collection.
                      </p>
                      <AddBookForm showAlert={showAlert} updateBooks={updateBooks} />
                    </div>
                  )}
                  {view === 'bookDetails' && (
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">View Book</h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                          View the book details.
                        </p>
                        <BookDetails selectedBookId={selectedBookId} setView={setView} setSelectedBookId={setSelectedBookId} showAlert={showAlert} updateBooks={updateBooks} />
                      </div>
                    )}
                    {view === 'updateBook' && (
                      <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">Update Book</h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                          Update the book details.
                        </p>
                        <UpdateBookForm showAlert={showAlert} selectedBookId={selectedBookId} setView={setView} updateBooks={updateBooks} />
                      </div>
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

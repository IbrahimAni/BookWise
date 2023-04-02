import React from 'react'

const BookActionAlert = ({bookAdded, action}) => {
  return (
    <>
    {bookAdded && (
    
      <div className="fixed top-0 left-0 right-0 z-20"  id="alert">
        <div className="bg-green-500 text-white px-4 py-3 shadow-md" role="alert">
          <p className="font-bold">Success!</p>
          <p className="text-sm">The book has been {typeof action === 'string' ? action : ''}.</p>
        </div>
      </div>
    )
      }
    </>
  );
};

export default BookActionAlert
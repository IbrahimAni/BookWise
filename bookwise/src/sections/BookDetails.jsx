import React from 'react'

const BookDetails = ({dbook}) => {
  return (
    <div className="book-details-section">
      <div className="bg-white shadow rounded p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Book Details</h2>
          <div>
            <a
              href={`update?id=${dbook.id}`}
              className="bg-blue-500 text-white hover:text-white hover:opacity-75 py-1 px-3 rounded mr-2"
            >
              Update
            </a>
            <a
              href={`delete?id=${dbook.id}`}
              className="bg-red-500 text-white hover:text-white hover:opacity-75 py-1 px-3 rounded"
            >
              Delete
            </a>
          </div>
        </div>
        <div className="flex flex-wrap">
          <img
            src="https://i.ibb.co/tH2rkC8/two-new-books-wrappers.jpg"
            alt="Book cover"
            className="w-48 h-72 md:w-64 md:h-96 lg:w-72 lg:h-108 xl:w-80 xl:h-120 mr-4 mb-4"
          />
          <div>
            <p>
              <span className="font-bold">Title: </span> {dbook.title}
            </p>
            <p>
              <span className="font-bold">Author: </span>{dbook.author}
            </p>
            <p>
              <span className="font-bold">Date: </span> {dbook.date}
            </p>
            <p>
              <span className="font-bold">Genres: </span>{dbook.genres}
            </p>
            <p>
              <span className="font-bold">Characters: </span>
              {dbook.characters}
            </p>
            <p>
              <span className="font-bold">Synopsis: </span>{dbook.synopsis}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails
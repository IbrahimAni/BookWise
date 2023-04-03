import React from 'react';
import JsonBookDetails from './JsonBookDetails';
import XmlBookDetails from './XmlBookDetails';
import TextBookDetails from './TextBookDetails';

const DisplayBookDetails = ({ format, bookDetails }) => {
  if (format === 'json') {
    return <JsonBookDetails bookDetails={bookDetails} />;
  } else if (format === 'xml') {
    return <XmlBookDetails bookDetails={bookDetails} />;
  } else if (format === 'text') {
    return <TextBookDetails bookDetails={bookDetails} />;
  } else {
    return <div>Invalid format</div>;
  }
};

export default DisplayBookDetails;



useEffect(() => {
  const fetchBookDetails = async () => {
    const format = localStorage.getItem('dataFormat') || 'json';
    let book = await fetchBook(selectedBookId);

    if (format === 'xml') {
      const xmlString = xmlFormatter(book);
      const json = JSON.parse(xml2json(xmlString, { compact: true }));
      book = json.book;
    }

    setBookDetails(book);
  };
  if (selectedBookId) {
    fetchBookDetails();
  }
}, [selectedBookId]);

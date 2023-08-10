import './book.scss';
import React from 'react';


const BookButton = ({ bookInfo }) => {
  const queryString = new URLSearchParams({ bookInfo: JSON.stringify(bookInfo) }).toString();
  const url = `/book/${bookInfo.id}?${queryString}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="btn">More Information</button>
    </a>
  );
};

export default BookButton;
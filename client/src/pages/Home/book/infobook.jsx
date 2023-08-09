import './book.scss';
import React from 'react';

const InfoBook = ({ bookInfo }) => {
  const handleButtonClick = () => {
    // Open a new tab with the bookInfo as a query parameter
    const queryString = new URLSearchParams({ bookInfo: JSON.stringify(bookInfo) }).toString();
    window.open(`/book/${bookInfo.id}?${queryString}`, '_blank');
  };

  return (
    <button className="btn" onClick={handleButtonClick}>
      More Information
    </button>
  );
};

export default InfoBook;
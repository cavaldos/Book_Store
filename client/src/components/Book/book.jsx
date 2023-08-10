import { Rating } from '@mui/material';
import React from 'react';
import './bookdetail.scss';

const BookInfoPage = () => {

  // Retrieve the bookInfo parameter from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const bookInfo = JSON.parse(queryParams.get('bookInfo'));

/////Merge từ phần này
  return (
    <div class="grid-container">
      <form id="f1"><div><img src={bookInfo.image} alt={bookInfo.title} /></div></form>
      <form id="f2">
      <Rating name="book-rating" value={bookInfo.rate} precision={0.5} readOnly />
      <h1>{bookInfo.title}</h1>
      <p id="price_info">$ {bookInfo.price}</p>
      <p id="auth">By: {bookInfo.author}</p>
      <br />
      <p><span id="cate">Description:</span> {bookInfo.description}</p>
      <br /><hr /><br />
      <div id="more_info">
        <p id="lineinfo"><span id="cate">ISBN:</span> {bookInfo.isbn}</p>
        <p id="lineinfo"><span id="cate">Genre:</span> {bookInfo.genre}</p>
        <p id="lineinfo"><span id="cate">Publish Year:</span> {bookInfo.publish_year}</p>
        <p id="lineinfo"><span id="cate">Publisher:</span> {bookInfo.publisher}</p>
      </div>
      <button id="button_info">Add to Cart</button>
      </form>
    </div>
  );
};

export default BookInfoPage;
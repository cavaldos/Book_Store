import React from "react";
import { useParams } from "react-router-dom";
import "./book.scss"

const Book = () => {
  const { bookId } = useParams();

  // Retrieve the bookInfo parameter from the URL
  const queryParams = new URLSearchParams(window.location.search);
  const bookInfo = JSON.parse(queryParams.get('bookInfo'));

  // You can use the `bookId` parameter to fetch book data or perform any necessary actions

  return (
    <div>
      <img src={bookInfo.image} alt={bookInfo.title} />
      <p>Title: {bookInfo.title}</p>
      <p>Author: {bookInfo.author}</p>
      <p>Price: {bookInfo.price}</p>
      <p>Rate: {bookInfo.rate}</p>
      <p>Discription: {bookInfo.discription}</p>
      <p>ISBN: {bookInfo.isbn}</p>
      <p>Genre: {bookInfo.genre}</p>
      <p>Publish Year: {bookInfo.publish_year}</p>
      <p>Publisher: {bookInfo.publisher}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Book;
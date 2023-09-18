import React from 'react';
import './index.css';

const Book = (props) => {
  const { title, author } = props.book;

  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
import React, { useState } from 'react';
import Book from './components/Book';

function App() {
  const bookState = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  };

  return (
    <div className="App">
      <h1>My Book</h1>
      <Book book={bookState} />
    </div>
  );
}

export default App

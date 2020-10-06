import React from 'react';
import './App.css';
import AddComment from '../AddComment/AddComment';
import Comments from '../Comments/Comments';

function App() {
  return (
    <div className="App">
      <AddComment />
      <Comments />
    </div>
  );
}

export default App;

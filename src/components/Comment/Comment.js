import React from 'react';
import './Comment.css';


function Comment(props) {
  const { comment } = props;

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{comment.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{comment.email}</h6>
        <p className="card-text">{comment.body}</p>
      </div>
    </div>
  );
}

export default Comment;

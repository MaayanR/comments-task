import React, { useState } from 'react';
import './AddComment.css';
import Button from '@material-ui/core/Button';
import { sendComment } from '../../services/commentsService';


function AddComment() {
  const [commentText, setCommentText] = useState("");

  const handleTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSending = () => {
    let comment = {
      // name: name,
      text: commentText
    };
    sendComment(comment);
    setCommentText("");
  };
  
  return (
    <div className="addContainer">
      <h1>Add Your Comment</h1>
      <textarea 
        className="commentText" 
        onChange={handleTextChange} 
        value={commentText}
        placeholder="Add a comment..."
      />
      <Button onClick={handleCommentSending} variant="contained" color="primary">
        Send
      </Button>
    </div>
  );
}

export default AddComment;

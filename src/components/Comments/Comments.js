import React, { useState, useEffect } from 'react';
import './Comments.css';
import Button from '@material-ui/core/Button';
import { getComments } from '../../services/commentsService';
import Comment from '../Comment/Comment';


function Comments() {
  const commentsLimit = 10;
  const [startComment, setStartComment] = useState(0);
  const [loadedComments, setLoadedComments] = useState([]);
  
  const loadComments = () => {
    getComments(startComment, commentsLimit)
      .then(nextComments => {
        let allComments = JSON.parse(JSON.stringify(loadedComments));
        allComments.push(...nextComments.data);
        //console.log(allComments);
        setLoadedComments(allComments);
        setStartComment(startComment + commentsLimit);
      }).catch(() => console.log("An error has occured while loading comments"));
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div className="commentsContainer">
      <h1>Comments</h1>
      {loadedComments ?
        loadedComments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        )) :
        <h3>There aren't any comments</h3>}
      <Button onClick={loadComments} variant="contained" color="primary">
        Load More
      </Button>
    </div>
  );
}

export default Comments;

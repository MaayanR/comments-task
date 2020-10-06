import axios from 'axios';


export const getComments = (start, limit) => {
  let urlRequest = 
    `http://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`;
  return axios.get(urlRequest);
};

export const sendComment = (data) => {
  let urlRequest = 'test.steps.me/test/testAssignComment';
  axios.post(urlRequest, data)
    .then(() => console.log("Comment has been sent"))
    .catch(() => console.log("Somthing went wrong"));
};
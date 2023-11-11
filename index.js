import axios from "axios";

// console.log("axios", axios);

function getUserAccount() {
    return axios.get('https://jsonplaceholder.typicode.com/users/1');
  }
  
  function getUserPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1');
  }
  
  const [acct, posts] = await Promise.all([getUserAccount(), getUserPosts()]);

  console.log(acct.data, posts.data);
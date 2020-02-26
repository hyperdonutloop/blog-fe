import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

function DisplayPost() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    axiosWithAuth()
    .get('https://blog-be.herokuapp.com/api/blog')
    .then((res) => {
      console.log(res.data);
      setPosts(res.data)
    })
    .catch((error) => {
      console.log('error message', error);
      
    })
  }, [])

  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            <h2>TESTING</h2>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

export default DisplayPost;
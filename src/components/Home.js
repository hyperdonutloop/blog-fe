import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadAllPosts } from '../actions';
import Post from './Post.js';


function Home (props) {
  const { post, needUpdate, isLoading, loadAllPosts } = props;
  console.log('test', post);
  
  useEffect(() => {
    if((post.length === 0 && !isLoading) || needUpdate) {
      loadAllPosts()
    }}, [post, needUpdate, isLoading, loadAllPosts])

  return (
    
    <div className="post-page">
      <div className="post-list">
        <h1>These are all your posts</h1>
        {post.map((item,i)=><Post key={i} post={item}/>)}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    post: state.posts,
    isLoading: state.isLoading,
    needUpdate: state.needUpdate
  }
}

export default connect(mapStateToProps,{loadAllPosts})(Home);

// line 29 - changed 'post' to 'posts' and retrieving all posts worked
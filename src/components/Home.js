import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadAllPosts, loadPost } from '../actions';

function Home (props) {
  // const id = Number(props.match.params.id)
  const { post, needUpdate, isLoading, loadAllPosts } = props;

  useEffect(() => {
    if ((post.length === 0 && !isLoading) || needUpdate) {
      loadAllPosts()
    }
  }, [post, needUpdate, isLoading, loadAllPosts])
  return (
    
    <div className="post-page">
      <h1>These are all your posts</h1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    post: state.post,
    isLoading: state.isLoading,
    needUpdate: state.needUpdate
  }
}

export default connect(mapStateToProps,{loadAllPosts})(Home);
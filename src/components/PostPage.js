import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { deletePost, loadPost } from '../actions';

const PostPage = props => {
  const id = Number(props.match.params.id);
  const { post, isLoading, loadPost } = props;

  useEffect(() => {
    if (!isLoading && (!post || post.id !== id )) {
      loadPost(id)
    }
  }, [id, post, isLoading, loadPost]) //remove loadPost if any errors

  return (
    <div className="post=page">
      {post 
        ?
        <div className="single-book">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        : null
      }
    </div>
  );

}

const mapStateToProps = state => {
  return {
    post: state.post,
    isLoading: state.isLoading,
    needUpdate: state.needUpdate
  }
};

export default connect(mapStateToProps, {deletePost, loadPost})(PostPage);
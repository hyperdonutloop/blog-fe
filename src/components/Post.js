import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions';

const Post = props => {

  const deletePost = () => {
    props.deletePost(props.post.id)
  }

  return (
    <div>
      <button className="del=post" onClick={deletePost} ></button>
      <h2>{props.post.title}</h2>
      <p>{props.post.body} </p>
    </div>
  );
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps, {deletePost})(Post);
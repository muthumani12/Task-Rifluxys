import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import '../Edit.css';
import { RouteComponentProps } from 'react-router-dom';

type CombinedProps = RouteComponentProps<{}>;


class Posts extends Component <CombinedProps>{
  componentWillMount() {
    this.props.fetchPosts();
  }


  render() {
    const postItems = this.props.posts.map(post => (
      <div className='row'>
        <div className='Feeds'>
  <label className='fonts' >{post.id} </label>
        <div>
          <label className='fontstitle' >{post.title} </label>
          </div>
  <label className='fonts'  >{post.body} </label>
  <div>
  </div>
        </div>
            </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);

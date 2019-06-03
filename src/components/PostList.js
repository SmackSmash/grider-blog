import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    if (this.props.posts.length) {
      return this.props.posts.map(post => {
        return (
          <div className="item" key={post.id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return <h2>Loading posts...</h2>;
    }
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList(this.props.posts)}</div>;
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);

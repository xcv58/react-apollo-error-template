import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class Posts extends Component {
  render() {
    const { data: { loading, allPosts } } = this.props;
    console.log(allPosts);
    if (loading) {
      return (
        <p>Loading...</p>
      )
    }
    return (
      <div>
        <h2>First 10 posts</h2>
        <ul>
          {allPosts.slice(1, 10).map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
}

const App = graphql(
  gql`
    query ErrorTemplate {
      allPosts {
        id
        title
      }
    }
  `
)(Posts);

export default (props) => (
  <main>
    <header>
      <h1>Apollo Client Error Template</h1>
      <p>
        This is a template that you can use to demonstrate an error in
        Apollo Client. Edit the source code and watch your browser window
        reload with the changes.
      </p>
      <p>
        The code which renders this component lives in{" "}
        <code>./src/App.js</code>.
      </p>
      <p>
        The GraphQL schema is in <code>./src/graphql/schema</code>.
        Currently the schema just serves a list of people with names and
        ids.
      </p>
    </header>
    <App />
    <App />
    <App />
    <App />
  </main>
)

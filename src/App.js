import React, { Component } from 'react';
import './App.css'
import List from './components/List'
import Post from './components/Post'
import Form from './components/AddArticle'
class App extends Component {
  render() {
    return (
      <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
    <h2>Articles</h2>
      <List />
    </div>
    <div className="col-md-4 offset-md-1">
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div className="col-md-4 offset-md-1">
    <h2>API Post</h2>
      <Post />
    </div>
  </div>
  
    );
  }
}

export default App;

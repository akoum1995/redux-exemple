import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/actions";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
}


class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      id: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title;
    const id = this.state.id;
    this.props.addArticle({ title, id });
    this.setState({ title: "",id:"" });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="title">Id</label>
          <input type="text" className="form-control" id="id" onChange={this.handleChange}/>
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

export default connect(null, mapDispatchToProps)(Form);
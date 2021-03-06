import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = e => {
        this.setState({ comment: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({ comment: '' });
    }

    render() {
        return (
            <form
                action=""
                onSubmit={this.handleSubmit}
            >
                <h4>Add a Comment</h4>
                <textarea 
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: [],
            userId: 112,
            errors: {}
        }
    }

    componentDidMount() {
    }

    //call validate empty function and push data to parent
    handleSubmit = () => {
        if (!this.validEmpty()) {
            return;
        }

        let title = this.state.title;
        let body = this.state.body;

        let data = {
            title,
            body
        }
        this.props.options.onSubmit(data);
    }

    //validate empty and show error message
    validEmpty = () => {
        let title = this.state.title;
        let body = this.state.body;
        let errors = { ...this.state.errors };
        let valid = true;

        if (title === "" || title === null || title === undefined) {
            errors.title = "This field cant be empty";
            valid = false;
        }
        if (body === "" || body === null || body === undefined) {
            errors.body = "This field cant be empty";
            valid = false;
        }

        this.setState({
            errors
        })
        return valid;
    }

    //handle change data and remove error message if enter input
    onChangeData = (value, name) => {
        let errors = { ...this.state.errors };
        errors[name] = "";
        this.setState({
            [name]: value,
            errors
        })
    }

    render() {

        return (
            <>
                <div className="block-input" style={{ marginTop: "30px" }}>
                    Title<span className="requireSample">*</span> <input className="input" type="text" onChange={e => this.onChangeData(e.target.value, 'title')}></input>
                    {
                        this.state.errors.title ? <div className="error">{this.state.errors.title}</div> : null
                    }
                </div>
                <div className="block-input">
                    Body<span className="requireSample">*</span> <input className="input body-input" type="text" onChange={e => this.onChangeData(e.target.value, 'body')}></input>
                    {
                        this.state.errors.body ? <div className="error">{this.state.errors.body}</div> : null
                    }
                </div>
                <div>
                    <button style={{ width: '100px', height: '30px' }} onClick={this.handleSubmit}>Submit</button>
                </div>
            </>
        );
    }
}
export default PostForm;

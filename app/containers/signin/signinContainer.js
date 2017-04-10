import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignInForm } from '../../components/signin/signinComponent';


export class SignInPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            credentials: { username: '', password: '' }
        }
    }

    handleChange = (event) => {

        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        return this.setState(
            { credentials: credentials }
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.credentials);
    }

    render() {
        return (
            <SignInForm
                submitHandle={this.handleSubmit}
                handleChange={this.handleChange}
                credentials={this.state.credentials}
            />

        );
    }

}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
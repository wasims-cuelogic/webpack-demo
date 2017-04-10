import React from 'react';
import { connect } from 'react-redux';
import { SignupForm } from '../../components/signup/signupComponent';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signupData: {
                "lname": "",
                "fname": "",
                "email": "",
                "password": ""
            }
        }
    }

    handleChange = (event) => {
        const field = event.target.name;
        const signupData = this.state.signupData;
        signupData[field] = event.target.value;
        this.setState({
            signupData: signupData
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.signupData)
    }

    render() {
        return (
            <SignupForm
                submitHandle={this.handleSubmit}
                changeHandle={this.handleChange}
                signupData={this.state.signupData}
            />
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
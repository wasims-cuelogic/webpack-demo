import React, { Component } from 'react';

export const SignInForm = (props) => {

    return (
        <div className="row">
            <div className="col-md-6 col-md-offset-2">
                <form onSubmit={props.submitHandle} id="frm-signin">
                    <h1>Sign In</h1>

                    <div className="form-group">
                        <label className="control-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter Username"
                            value={props.username}
                            onChange={props.handleChange} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={props.password}
                            onChange={props.handleChange} />
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary btn-lg" > Sign In </button>
                    </div>
                </form>
            </div>
        </div>
    );

}


SignInForm.propTypes = {
    submitHandle: React.PropTypes.func,
    handleChange: React.PropTypes.func,
};
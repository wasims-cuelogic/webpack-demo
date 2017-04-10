import React, { Component } from 'react';

export const SignupForm = (props) => {
    return (
        <div className="row">            
            <div className="col-md-6 col-md-offset-2">
                <form onSubmit={props.submitHandle} id="frm-signin" autoComplete="off">
                    <h1>Sign Up</h1>

                    <div className="form-group">
                        <label className="control-label">First Name</label>
                        <input
                            type="text"
                            name="fname"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={props.fname}
                            onChange={props.changeHandle} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Last Name</label>
                        <input
                            type="text"
                            name="lname"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={props.lname}
                            onChange={props.changeHandle} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={props.email}
                            onChange={props.changeHandle} />
                    </div>

                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={props.password}
                            onChange={props.changeHandle} />
                    </div>


                    <div className="form-group">
                        <button className="btn btn-primary btn-lg" > Sign In </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

SignupForm.propTypes = {
    submitHandle: React.PropTypes.func,
    changeHandle: React.PropTypes.func
}
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

export class BankApp extends Component {
    handleDeposit() {
        this.props.onDeposit(this.refs.amount.value);
        this.refs.amount.value = '';
    }

    handleWithdraw() {
        this.props.onWithdraw(this.refs.amount.value);
        this.refs.amount.value = '';
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-2">
                        <header>
                            <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />Redux Bank Demo
                        </header>
                        <h1>Your balance is ${(this.props.balance).toFixed(2)}</h1>
                        
                            <div className="form-group">
                                <label className="control-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Ammount"
                                    ref="amount"
                                />
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" onClick={this.handleWithdraw.bind(this)}> Withdraw </button>
                                <button className="btn btn-primary btn-lg" onClick={this.handleDeposit.bind(this)}> Deposit </button>
                            </div>
                        

                        <div className="exchange" onClick={this.props.onToggle}>
                            <strong>Exchange Rates:</strong>
                            <div className={this.props.showExchange ? 'exchange-visible' : 'exchange-closed'}>
                                <strong>$1 USD =</strong>
                                <span className="rate">0.9990 EUR</span>
                                <span className="rate">0.7989 GBP</span>
                                <span className="rate">710.15 JPY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

BankApp.propTypes = {
    balance: PropTypes.number,
    showExchange: PropTypes.bool,
    onDeposit: PropTypes.func,
    onWithdraw: PropTypes.func,
    onToggle: PropTypes.func,
};
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import bankStore from '../store/bankStore';
import constants from '../constants/constants';
import { BankApp } from '../components/bankComponent';
import { connect } from 'react-redux';
import bankActionCreators from '../actions/bankActionCreators';

export class BankAppContainer extends Component {

    componentDidMount() {
        this.unsubscribe = bankStore.subscribe(() =>
            this.setState({ balance: bankStore.getState().balance })
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <BankApp
                balance={bankStore.getState().balance}
                onDeposit={(amount) => bankStore.dispatch(bankActionCreators.depositIntoAccount(amount))}
                onWithdraw={(amount) => bankStore.dispatch(bankActionCreators.withdrawFromAccount(amount))}
                onToggle={() =>bankStore.dispatch(bankActionCreators.toggleInfo())}
                showExchange={this.props.showExchange}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        balance: state.balance,
        showExchange: state.ui.showExchange,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
        onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
        onToggle: () => dispatch(bankActionCreators.toggleInfo()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BankAppContainer)
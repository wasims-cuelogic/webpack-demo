import constants from '../constants/constants';

const bankActionCreators = {
    /**
    * @param {number} amount to whithdraw
    */
    depositIntoAccount(amount) {
        return {
            type: constants.DEPOSIT_INTO_ACCOUNT,
            amount: amount
        };
    },

    /**
    * @param {number} amount to whithdraw
    */
    withdrawFromAccount(amount) {
        return {
            type: constants.WITHDRAW_FROM_ACCOUNT,
            amount: amount
        };
    },

    /**
    * Toggle the visibility of the exchange rate
    */
    toggleInfo() {
        return {
            type: constants.TOGGLE_INFO
        };
    }
}

export default bankActionCreators;
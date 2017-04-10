import { createStore, applyMiddleware, compose } from 'redux'
import bankReducer from '../reducers/bankReducer';

const logger = (store) => (next) => (action) => {
    console.log('dispatching:', action);
    return next(action);
}

const bankStore = createStore(
    bankReducer,
    compose(
        applyMiddleware(logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ), // enhance the store with the logger middleware
);

export default bankStore;
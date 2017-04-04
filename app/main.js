import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import bankStore from './store/bankStore';
import Greeter from './Greeter';
import BankContainer from './containers/bankContainer';
import './main.css';

render(<Provider store={bankStore}>
    <BankContainer />
</Provider>, document.getElementById('root'));
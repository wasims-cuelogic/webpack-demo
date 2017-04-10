import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import bankStore from './store/bankStore';

import { Root } from "./components/Root";
import Greeter from './Greeter';

import SignIn from "./containers/signin/signinContainer";
import SignUp from "./containers/signup/signupContainer";
import BankContainer from './containers/bankContainer';
import Welcome from './containers/welcome';

import './main.css';


var routes = (
    <Router>
        <div>
            <Route path="/" component={Root} />
            <Route path="/home" component={Welcome} />
            <Route path="/bank" component={BankContainer} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </div>
    </Router>
);

class App extends React.Component {
    render() {
        return (
            <Provider store={bankStore} children={routes}>
            </Provider>
        )
    }
}

render(<App />, document.getElementById('root'));
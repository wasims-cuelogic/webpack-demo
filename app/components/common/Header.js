import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
    return (        
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/bank">Bank</Link></li>
                            <li><Link to="/signin">SignIn</Link></li>
                            <li><Link to="/signup">SignUp</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        
    )
}

export default Header;
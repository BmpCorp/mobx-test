import React from 'react';
import {Link} from 'react-router-dom';

import strings from '../Strings';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="nav-menu">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link className="nav-item__link" to="/">{strings.NAV_FRONTPAGE}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item__link" to="/todo">{strings.NAV_TODO}</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;

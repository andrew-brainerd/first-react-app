import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName="active">Clock</NavLink>
            {" | "}
            <Link to="/journal" activeClassName="active">Journal</Link>
        </nav>
    );
};

export default Header;
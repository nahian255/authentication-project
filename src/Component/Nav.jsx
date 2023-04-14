import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log in</Link>
            <Link to="/singin">Sing up</Link>
            <Link to="/simple_login">Simple </Link>
            <Link to="/about">About</Link>
            <Link to=""></Link>

        </div>
    );
};

export default Nav;
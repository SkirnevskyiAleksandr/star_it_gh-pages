import React from 'react';

const NavItem = (props) => {
    return (
        <li className="nav__item">
            <a className="nav__link" href={props.link}>{props.text}</a>
        </li>
    );
};

export default NavItem;
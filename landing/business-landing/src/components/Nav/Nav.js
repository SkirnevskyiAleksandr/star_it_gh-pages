import React from 'react';
import NavItem from "./NavItem";

import "./nav.css"

const Nav = (props) => {

    const navItem = props.date.map((item, i) =>
        <NavItem
            key = {i}
            link = {item.link}
            text = {item.text}
        />);

    return (
        <nav className="nav">
            <ul className={props.open ? "nav__list open"  : "nav__list"} >{navItem}</ul>
        </nav>
    );
};

export default Nav;
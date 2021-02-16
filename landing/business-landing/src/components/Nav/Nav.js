import React from 'react';
import NavItem from "./NavItem";

import nav from "./Nav.module.css"

const Nav = (props) => {

    const navItem = props.data.map((item, i) =>
        <NavItem
            key={i}
            link={item.link}
            text={item.text}
        />);

    return (
        <nav className={nav.container}>
            <ul className={nav.list}>{navItem}</ul>
        </nav>
    );
};

export default Nav;
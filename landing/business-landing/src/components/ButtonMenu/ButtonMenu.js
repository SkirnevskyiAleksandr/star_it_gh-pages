import React from 'react';

import "./btn_menu.css"
import "./hamburger.css"

const ButtonMenu = (props) => {
    return (
        <button className="btn btn_menu" onClick={() => props.onClick(props.isMenuOpen)}>
            Menu
            <div className={props.statusBtn ? "hamburger hamburger_close" : "hamburger"}>
                <span/>
                <span/>
                <span/>
            </div>
        </button>
    );
};

export default ButtonMenu;
import React from 'react';

import "./btn_menu.css"
import "./hamburger.css"

const ButtonMenu = (props) => {
    return (
        <button className="btn btn_menu" onClick={props.handle}>
            Menu
            <div className={props.open ? "hamburger close" : "hamburger"}>
                <span/>
                <span/>
                <span/>
            </div>
        </button>
    );
};

export default ButtonMenu;
import React, {Component} from 'react';
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import ButtonMenu from "../ButtonMenu/ButtonMenu";

import "./Header.css"

import logo from "./img/logo.png";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    navItemDate = [
        {
            text: "Как это работает",
            link: "#",
        },
        {
            text: "Сколько это стоит",
            link: "#",
        }];

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <header className="header">
                <div className="row">
                    <div className="header__wrap">
                        <Logo
                            img = {logo}
                            text = "StarIt"
                            title = "logotype"
                            width = "100"
                            height = "100"
                        />
                        <ButtonMenu
                            open = {this.state.isToggleOn}
                            handle = {this.handleClick}
                        />
                        <Nav
                            open={this.state.isToggleOn}
                            date = {this.navItemDate}
                        />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
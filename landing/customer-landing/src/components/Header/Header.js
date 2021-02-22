import React, {useEffect, useState} from 'react';
import Nav from "../Nav/Nav";
import Logo from "../Logo/Logo";
import ButtonMenu from "../ButtonMenu/ButtonMenu";

import header from "./Header.module.css"

import logo from "./img/logo.png";

const useScreenWidth = () => {
    const [width, setSize] = useState([window.innerWidth]);

    useEffect(() => {
        const handleResize = () => setSize([window.innerWidth]);

        window.addEventListener('resize', handleResize);
    }, []);
    return width;
};

const Header = () => {
    const navItemData = [
        {
            text: "Где это работает",
            link: "#",
        },
        {
            text: "Как это работает",
            link: "#",
        }];

    const maxWidth = 768;
    const width = useScreenWidth();
    let [isMenuOpen, setMenuStatus] = useState(false);

    const handleOpenMenu = (isMenuOpen) => {
        setMenuStatus(!isMenuOpen);
    };

    const nav =
        <Nav
            data={navItemData}
            isMenuOpen={handleOpenMenu}
        />;

    const btnMenu =
        <ButtonMenu
            statusBtn = {isMenuOpen}
            isMenuOpen={handleOpenMenu}
            onClick={setMenuStatus}
        />;

    return (
        <header className={`${header.container} row`}>
            <div className={header.wrap}>
                <Logo
                    img={logo}
                    text="StarIt"
                    title="logotype"
                    width="100"
                    height="100"
                />
                {width < maxWidth ? btnMenu : null}
                {width > maxWidth ? nav : isMenuOpen ? nav : null}
            </div>
        </header>
    );
};

export default Header;
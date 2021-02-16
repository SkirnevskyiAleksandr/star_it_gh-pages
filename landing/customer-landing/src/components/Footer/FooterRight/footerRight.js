import React from 'react';
import s from './footerRight.module.css';
import AppStore from './footerStoreButtons/footerStoreButton__AppStore/AppStore';
import GooglePlay from './footerStoreButtons/FooterStoreButton__GooglePlay/GooglePlay';

const FooterRight = () =>{
    return(
        <section className = {s.footerRight}>
            <AppStore/>
            <GooglePlay/>
        </section>    
    );
};

export default FooterRight;
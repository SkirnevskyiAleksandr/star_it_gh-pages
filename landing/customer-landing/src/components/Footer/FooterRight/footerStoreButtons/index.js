import React from 'react';
import AppStore from './footerStoreButton__AppStore/AppStore';
import GooglePlay from './FooterStoreButton__GooglePlay/GooglePlay';
import Browser from './footerStoreButton__Browser/browser';
import footerStoreButtonsModule from './footerStoreButtons.module.css'

const FooterStoreButtons = () =>{
    return(
        <div className = {footerStoreButtonsModule.buttons}>
            <AppStore/>
            <GooglePlay/>
            <Browser/>
        </div>
    )
}

export default FooterStoreButtons
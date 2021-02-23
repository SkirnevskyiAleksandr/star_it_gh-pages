import React from 'react';
import footerLeftModule from './footerLeft.module.css';
import Facebook from './SocialIcons/Facebook/facebook';
import Twitter from './SocialIcons/twitter/twitter';
import Instagram from './SocialIcons/instagram/instagram';

const FooterLeft = () =>{
    return(
<section className = {footerLeftModule.footerContacts}>
        <b className = {footerLeftModule.footerContacts__title}>YourR&D</b>
        <address className = {footerLeftModule.footerContacts__address}>
          <div>
                    <a href="tel+377777777" className = {footerLeftModule.footerContacts__item}>+3777777777</a>
          </div>
          <div>
            <a href="mailto:sanya" className = {footerLeftModule.footerContacts__item}>E-mail</a>
          </div>
          <div className = {footerLeftModule.socialIcons}>
            <Facebook/>
            <Twitter/>
            <Instagram/>
          </div>
        </address>
      </section>
    )
}

export default FooterLeft;
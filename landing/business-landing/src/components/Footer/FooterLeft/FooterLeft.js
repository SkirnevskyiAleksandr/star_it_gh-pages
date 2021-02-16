import React from 'react';
import s from './footerLeft.module.css';
import Facebook from './SocialIcons/Facebook/facebook';
import Twitter from './SocialIcons/twitter/twitter';
import Instagram from './SocialIcons/instagram/instagram';

const FooterLeft = () =>{
    return(
<section className = {s.footerContacts}>
        <b className = {s.footerContacts__title}>YourR&D</b>
        <address className = {s.footerContacts__address}>
          <div>
                    <a href="tel+377777777" className = {s.footerContacts__item}>+3777777777</a>
          </div>
          <div>
            <a href="mailto:sanya" className = {s.footerContacts__item}>E-mail</a>
          </div>
          <div className = {s.socialIcons}>
            <Facebook/>
            <Twitter/>
            <Instagram/>
          </div>
        </address>
      </section>
    )
}

export default FooterLeft;
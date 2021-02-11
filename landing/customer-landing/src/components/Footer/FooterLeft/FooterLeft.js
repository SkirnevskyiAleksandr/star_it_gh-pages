import React from 'react';
import s from './footerLeft.module.css';

const FooterLeft = () =>{
    return(
<section className = {s.footerContacts}>
        <div className={s.footerContacts__title}>Наши контакты</div>
        <address className = {s.footerContacts__address}>
          <a href="tel+377777777" className = {s.footerContacts__item}>+3777777777</a>
          <a href="mailto:sanya" className = {s.footerContacts__item}>тыц</a>
        </address>
      </section>
    )
}

export default FooterLeft;
import React from 'react';
import s from './footer.module.css';

const Footer = () =>{
    return(
        <footer className = {s.footer}>
      <section className = {s.footerCcontacts}>
        <div className={s.footerCcontacts__title}>Наши контакты</div>
        <address className = {s.footerContacts__address}>
          <a href="tel+377777777" className = {s.footerContacts__item}>+3777777777</a>
          <a href="mailto:sanya" className = {s.footerContacts__item}>тыц</a>

        </address>
      </section>
      <section className = {s.footer__right}>
        klj

      </section>
    </footer>
    )
}
export default Footer;
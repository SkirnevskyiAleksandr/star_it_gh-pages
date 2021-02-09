import React from 'react';
import './footer.css';

const Footer = () =>{
    return(
        <footer className = "footer">
      <section className = "footer-contacts">
        <div className="footer-contacts__title">Наши контакты</div>
        <address className = "footer-contacts__address">
          <a href="tel+377777777" className = "footer-contacts__item">+3777777777</a>
          <a href="mailto:sanya" className = "footer-contacts__item">тыц</a>

        </address>
      </section>
      <section className = "footer__right">
        klj

      </section>
    </footer>
    )
}
export default Footer;
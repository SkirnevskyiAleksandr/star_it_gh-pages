import React from 'react';
import s from './footer.module.css';
import FooterRight from './FooterRight/footerRight'
import FooterLeft from './FooterLeft/FooterLeft';

const Footer = () =>{
    return(
        <footer className = {s.footer}>
          <FooterLeft/>
          <FooterRight/>
      </footer>
    )
}
export default Footer;
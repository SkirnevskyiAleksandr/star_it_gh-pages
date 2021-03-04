import React from 'react';
import footerStoreButtonsModule from '../footerStoreButtons.module.css';

const Browser = () =>{
    return (
        <a href = "#" className = {footerStoreButtonsModule.buttonLink}>
            <svg xmlns="http://www.w3.org/2000/svg" className = {footerStoreButtonsModule.picture} viewBox="0 0 143 42">
        <path fill="#a6a6a6" d="M137.9 42H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h132.9a5 5 0 0 1 5.1 5v32a5 5 0 0 1-5.1 5z"/>
        <path fill="#283139" d="M141.7 37a4 4 0 0 1-4.1 4H5a4.1 4.1 0 0 1-4.1-4V5A4 4 0 0 1 5 1h132.7c2.2 0 4.1 1.8 4.1 4l-.1 32z"/>
        <path id="hover" fillOpacity=".3" d="M141.7 37a4 4 0 0 1-4.1 4H5a4.1 4.1 0 0 1-4.1-4V5A4 4 0 0 1 5 1h132.7c2.2 0 4.1 1.8 4.1 4l-.1 32z"/>
        <path fill="#fff" d="M48 6.9v4.6c0 .5-.1 1-.3 1.4s-.6.7-1 .9-.9.3-1.5.3c-.9 0-1.6-.2-2.1-.7s-.7-1.1-.7-1.9V6.9h1.2v4.5c0 .6.1 1 .4 1.3s.7.4 1.3.4c1.1 0 1.7-.6 1.7-1.7V6.9h1zm5.3 5.6c0 .5-.2.9-.6 1.2s-.9.4-1.7.4a4 4 0 0 1-1.7-.3v-1a4 4 0 0 0 1.8.4c.7 0 1.1-.2 1.1-.6l-.1-.3-.4-.3-.7-.3c-.6-.2-1-.5-1.3-.7s-.3-.6-.3-.9c0-.5.2-.8.6-1.1s.9-.4 1.5-.4a4 4 0 0 1 1.8.4l-.4.9c-.6-.2-1.1-.4-1.5-.4-.6 0-.9.2-.9.5l.2.4 1 .5 1 .5c.2.2.4.3.4.5l.2.6zm3.6 1.6c-.8 0-1.5-.2-2-.7s-.7-1.2-.7-2c0-.9.2-1.6.7-2.1s1-.8 1.8-.8c.7 0 1.3.2 1.7.6s.6 1 .6 1.8v.6h-3.6c0 .5.2.9.4 1.2s.6.4 1.1.4l.9-.1.9-.3v.9l-.8.3-1 .2zm-.2-4.7c-.4 0-.7.1-.9.3s-.4.6-.4 1h2.5c0-.4-.1-.8-.3-1s-.6-.3-.9-.3zM64 14h-1.1V8.6H64V14zm-1.2-6.8l.2-.5.5-.2.5.2.2.5-.2.5c-.1.2-.3.2-.5.2l-.5-.2a.8.8 0 0 1-.2-.5zm4.9 6l.8-.1v.9H68l-.6.1c-1.1 0-1.6-.6-1.6-1.7V9.5h-.7V9l.8-.4.4-1.1h.7v1.2h1.5v.9H67v2.9l.2.6.5.1zm9.3-1.9c0 .9-.2 1.6-.7 2.1s-1.1.7-1.9.7c-.5 0-1-.1-1.3-.3-.4-.2-.7-.6-.9-1s-.3-.9-.3-1.5c0-.9.2-1.6.7-2.1s1.1-.7 1.9-.7c.8 0 1.4.3 1.9.8s.6 1.1.6 2zm-3.9 0c0 1.2.5 1.9 1.4 1.9.9 0 1.4-.6 1.4-1.9 0-1.2-.5-1.9-1.4-1.9-.5 0-.8.2-1 .5s-.4.8-.4 1.4zm10 2.7h-1.2v-3.3c0-.4-.1-.7-.3-.9s-.4-.3-.8-.3c-.5 0-.8.1-1.1.4s-.3.8-.3 1.4V14h-1.1V8.6h.9l.2.7h.1c.2-.3.4-.5.7-.6l1-.2c1.3 0 1.9.7 1.9 2V14zm3.3-5.4h1.2l1.1 3.1.3 1.2.2-.7 1.2-3.6h1.2l-2.3 6.1c-.4 1.1-1.1 1.7-2.1 1.7l-.7-.1v-.9l.6.1c.6 0 .9-.3 1.2-1l.2-.5-2.1-5.4zm11 2.7c0 .9-.2 1.6-.7 2.1s-1.1.7-1.9.7c-.5 0-1-.1-1.3-.3-.4-.2-.7-.6-.9-1s-.3-.9-.3-1.5c0-.9.2-1.6.7-2.1s1.1-.7 1.9-.7c.8 0 1.4.3 1.9.8s.6 1.1.6 2zm-3.9 0c0 1.2.5 1.9 1.4 1.9.9 0 1.4-.6 1.4-1.9 0-1.2-.5-1.9-1.4-1.9-.5 0-.8.2-1 .5s-.4.8-.4 1.4zm9 2.7l-.2-.7h-.1l-.7.6c-.3.2-.6.2-1 .2-.7 0-1.1-.2-1.5-.5s-.5-.8-.5-1.5V8.6h1.2v3.3c0 .4.1.7.3.9s.4.3.8.3c.5 0 .8-.1 1.1-.4.2-.3.3-.8.3-1.4V8.6h1.2V14h-.9zm5.3-5.5h.6l-.1 1.1-.5-.1c-.5 0-.8.1-1.1.4-.3.3-.4.7-.4 1.2V14h-1.1V8.6h.9l.2 1h.1l.7-.8c.3-.2.4-.3.7-.3zM54.1 32h-2.2l-2.1-7.2-.3-1.4-.2-1.2-.3 1.4-.3 1.3-2 7.2h-2.2L43 25.9l-1.6-6.1h2l1.7 7.1.6 3a47.8 47.8 0 0 0 .6-3l2-7.1h2l2 7.1.6 3 .6-3 1.7-7.1h2L54.1 32zm7 .2c-1.4 0-2.5-.4-3.3-1.2s-1.2-2-1.2-3.4c0-1.5.4-2.7 1.1-3.5s1.8-1.3 3.1-1.3c1.2 0 2.2.4 2.9 1.1s1.1 1.7 1.1 3V28h-6.1c0 .9.3 1.6.7 2.1.5.5 1.1.7 1.9.7l1.5-.2 1.5-.5v1.6l-1.4.5h-1.8zm-.3-8.1a2 2 0 0 0-1.5.6 3 3 0 0 0-.7 1.7h4.2c0-.8-.2-1.3-.5-1.7s-.9-.6-1.5-.6zm9.6-1.4c1.1 0 2 .4 2.7 1.2.6.8 1 2 1 3.5s-.3 2.7-1 3.5c-.6.8-1.5 1.3-2.7 1.3-1.2 0-2.1-.4-2.7-1.3h-.1l-.5 1.1h-1.5V19.1h2v5h.1c.5-1 1.4-1.4 2.7-1.4zm-.6 1.5c-.8 0-1.4.2-1.7.7-.3.5-.5 1.2-.5 2.3v.1c0 1.1.2 1.9.5 2.4.4.5.9.8 1.7.8.7 0 1.2-.3 1.6-.8s.5-1.3.5-2.4c.1-2-.6-3.1-2.1-3.1zm8.6-4.3H82c1.7 0 2.9.2 3.6.7s1.1 1.3 1.1 2.3c0 .7-.2 1.3-.5 1.8-.4.5-.9.8-1.6.9v.1c.9.2 1.5.5 1.9 1s.6 1.1.6 1.9c0 1.1-.4 1.9-1.1 2.6s-1.9.8-3.3.8h-4.4V19.9zm1.9 5h1.9c.8 0 1.4-.1 1.8-.4.4-.3.6-.7.6-1.3 0-.6-.2-1-.6-1.2-.4-.3-1.1-.4-2-.4h-1.7v3.3zm0 1.6v3.8h2.1c.8 0 1.5-.2 1.9-.5.4-.3.6-.8.6-1.5 0-.6-.2-1.1-.6-1.4-.4-.3-1.1-.5-2-.5h-2zm12.5-3.8l1 .1-.2 1.8-.9-.1c-.8 0-1.4.3-1.9.8s-.7 1.2-.7 2V32h-2v-9.2h1.5l.3 1.6h.1c.3-.5.7-1 1.2-1.3s1-.4 1.6-.4zm9.2 4.7c0 1.5-.4 2.7-1.2 3.5s-1.8 1.3-3.2 1.3c-.9 0-1.6-.2-2.3-.6s-1.2-.9-1.5-1.7c-.4-.7-.5-1.6-.5-2.5 0-1.5.4-2.7 1.1-3.5.8-.8 1.8-1.3 3.2-1.3 1.3 0 2.4.4 3.2 1.3s1.2 2 1.2 3.5zm-6.7 0c0 2.1.8 3.2 2.3 3.2 1.5 0 2.3-1.1 2.3-3.2s-.8-3.1-2.3-3.1c-.8 0-1.4.3-1.8.8s-.5 1.3-.5 2.3zm14.9 4.6l-1.2-4.3-.8-3.2h-.1l-.8 3.2-1.2 4.3H104l-2.6-9.2h2l1.2 4.5.6 2.9.3-1.4.3-1.2 1.4-4.8h2.1l1.4 4.8.3 1.2.2 1.3h.1l.6-2.9 1.2-4.5h2l-2.6 9.2h-2.3zm11.2-2.6c0 .9-.3 1.6-1 2.1s-1.6.7-2.8.7a6 6 0 0 1-2.9-.6v-1.7c1.1.5 2.1.7 3 .7 1.2 0 1.8-.4 1.8-1.1l-.2-.6c-.1-.2-.4-.3-.7-.5l-1.3-.6c-1.1-.4-1.8-.8-2.1-1.2s-.6-.9-.6-1.6c0-.8.3-1.4 1-1.8s1.5-.7 2.6-.7 2.1.2 3.1.7l-.6 1.5c-1-.4-1.8-.6-2.5-.6-1 0-1.5.3-1.5.9 0 .3.1.5.4.7l1.8.8 1.7.8c.4.2.6.5.8.8v1.3zm4.9 2.8c-1.4 0-2.5-.4-3.3-1.2-.8-.8-1.2-2-1.2-3.4 0-1.5.4-2.7 1.1-3.5.7-.9 1.8-1.3 3.1-1.3a4 4 0 0 1 2.9 1.1 4 4 0 0 1 1.1 3V28h-6.1c0 .9.3 1.6.7 2.1s1.1.7 1.9.7l1.5-.2 1.5-.5v1.6l-1.4.5h-1.8zm-.4-8.1c-.6 0-1.1.2-1.5.6s-.6 1-.7 1.7h4.2c0-.8-.2-1.3-.5-1.7a2 2 0 0 0-1.5-.6zm9.6-1.4l1 .1-.2 1.8-.9-.1c-.8 0-1.4.3-1.9.8s-.7 1.2-.7 2V32h-2v-9.2h1.5l.3 1.6h.1c.3-.5.7-1 1.2-1.3s1-.4 1.6-.4z"/>
        <path fill="none" stroke="#fff" strokeMiterlimit="10" d="M33.6 20a12.6 12.6 0 1 1-25.2 0 12.6 12.6 0 0 1 25.2 0zm-5.4 0c0 6.9-3.2 12.6-7.2 12.6s-7.2-5.7-7.2-12.6S17 7.4 21 7.4s7.2 5.7 7.2 12.6zM21 7.4v25.1M33.6 20H8.4m2.7-7.2h19.7M10.2 26.3h21.5"/>
    </svg>
        </a>   
    )
};

export default Browser;
import React from 'react';
import footerStoreButtonsModule from '../footerStoreButtons.module.css';

const AppStore = () =>{
    return (
        <a href = "#" className = {footerStoreButtonsModule.buttonLink}>
            <svg xmlns="http://www.w3.org/2000/svg" className = {footerStoreButtonsModule.picture} viewBox="0 0 143 42">
        <path id="line" fill="#a6a6a6" d="M137.9 42H5a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5h132.9a5 5 0 0 1 5.1 5v32a5 5 0 0 1-5.1 5z"></path>
        <path id="path-1" fill="#283139" d="M137.9 41H5.1A4 4 0 0 1 1 37V5a4 4 0 0 1 4.1-4H138c2.2 0 4.1 1.8 4.1 4v32c-.1 2.2-1.9 4-4.2 4z"></path>
        <path id="hover" fill-opacity=".3" d="M137.9 41H5.1A4 4 0 0 1 1 37V5a4 4 0 0 1 4.1-4H138c2.2 0 4.1 1.8 4.1 4v32c-.1 2.2-1.9 4-4.2 4z"></path>
        <path id="logo" fill="#ffffff" d="M19.2 14.5c0-3.4 2.8-5 2.9-5.1a6 6 0 0 0-5-2.7c-2-.2-4.1 1.2-5.1 1.2-1.1 0-2.7-1.2-4.5-1.2A6.2 6.2 0 0 0 2 10.1c-2.4 4.1-.6 10.2 1.7 13.5C4.8 25.2 6.2 27 7.9 27c1.7-.1 2.4-1.1 4.4-1.1 2.1 0 2.7 1.1 4.4 1 1.8 0 3-1.6 4.1-3.3 1.3-1.9 1.9-3.7 1.9-3.8 0 0-3.5-1.3-3.5-5.3zm-3.4-10A5.9 5.9 0 0 0 17.2.2c-1.3.1-3 .9-4 2-.9 1-1.6 2.6-1.4 4.1 1.5.2 3-.7 4-1.8z" class="st3" transform="translate(12.7 6.3)"></path>
        <path id="text" fill="#ffffff" d="M12.3 14.2H9.9l-1.3-4.1H4l-1.3 4.1H.4L5 .2h2.8l4.5 14zM8.2 8.3L7 4.7l-.7-2.6-.7 2.6-1.2 3.6h3.8zM24 9a6 6 0 0 1-1.4 4.1 4 4 0 0 1-3.1 1.3c-1.3 0-2.3-.5-2.9-1.4v5.3h-2.3V7.4l-.1-3.3h2l.1 1.6a3.8 3.8 0 0 1 3.4-1.8c1.2 0 2.2.5 3 1.4A5 5 0 0 1 24 9zm-2.3.1c0-1-.2-1.8-.7-2.4-.5-.7-1.1-1-2-1-.6 0-1.1.2-1.5.5-.5.4-.7.8-.9 1.4l-.1.7V10c0 .7.2 1.3.7 1.9.5.5 1 .8 1.8.8s1.5-.3 2-1a5 5 0 0 0 .7-2.6zM35.6 9a6 6 0 0 1-1.4 4.1 4 4 0 0 1-3.1 1.3c-1.3 0-2.3-.5-2.9-1.4v5.3h-2.3V7.4l-.1-3.3h2l.2 1.6a3.8 3.8 0 0 1 3.4-1.8c1.2 0 2.2.5 3 1.4.8.9 1.2 2.2 1.2 3.7zm-2.3.1c0-1-.2-1.8-.7-2.4-.5-.7-1.1-1-2-1-.6 0-1.1.2-1.5.5-.5.4-.7.8-.9 1.4l-.1.7V10c0 .7.2 1.3.7 1.9.5.5 1 .8 1.8.8s1.5-.3 2-1 .7-1.5.7-2.6zm15.4 1.1c0 1.2-.4 2.2-1.2 2.9-.9.8-2.2 1.2-3.8 1.2-1.5 0-2.7-.3-3.6-.9l.5-1.9c1 .6 2.1.9 3.3.9.8 0 1.5-.2 2-.6.5-.4.7-.9.7-1.5s-.2-1-.6-1.4c-.4-.4-1-.7-1.9-1.1-2.5-.9-3.7-2.2-3.7-4 0-1.1.4-2.1 1.3-2.8.9-.7 2-1.1 3.4-1.1 1.3 0 2.3.2 3.2.7l-.6 1.8a6 6 0 0 0-2.7-.6c-.8 0-1.4.2-1.9.6-.4.3-.6.8-.6 1.3 0 .6.2 1 .6 1.4l2 1.1a7 7 0 0 1 2.7 1.7c.6.6.9 1.4.9 2.3zm7.4-4.4h-2.5v4.9c0 1.2.4 1.9 1.3 1.9l1-.1.1 1.7c-.4.2-1 .2-1.8.2-.9 0-1.6-.3-2.1-.8s-.8-1.4-.8-2.7V5.8H50V4.1h1.5V2.3l2.2-.7v2.5h2.5v1.7zM67.3 9c0 1.5-.4 2.8-1.3 3.8s-2.2 1.5-3.7 1.5-2.7-.5-3.6-1.5-1.3-2.2-1.3-3.7c0-1.6.5-2.8 1.4-3.8.9-1 2.1-1.5 3.7-1.5 1.5 0 2.7.5 3.6 1.5.8 1 1.2 2.2 1.2 3.7zm-2.3.1c0-.9-.2-1.7-.6-2.4-.5-.8-1.1-1.2-2-1.2-.9 0-1.6.4-2.1 1.2-.4.7-.6 1.5-.6 2.4 0 .9.2 1.7.6 2.4.5.8 1.2 1.2 2 1.2.9 0 1.5-.4 2-1.2.5-.6.7-1.5.7-2.4zm9.7-3L74 6a2 2 0 0 0-1.8.9c-.4.5-.6 1.2-.6 2v5.3h-2.3V7.3l-.1-3.2h2l.1 1.9h.1a3 3 0 0 1 1.1-1.6c.5-.4 1-.5 1.6-.5h.6v2.2zm10.1 2.6l-.1 1h-6.8a3 3 0 0 0 1 2.3c.6.5 1.3.7 2.2.7 1 0 1.9-.2 2.7-.5l.4 1.6a9 9 0 0 1-3.4.6 5 5 0 0 1-3.7-1.4 5 5 0 0 1-1.3-3.7c0-1.5.4-2.8 1.3-3.8a4.3 4.3 0 0 1 3.5-1.6c1.5 0 2.6.5 3.3 1.6.6.8.9 1.9.9 3.2zm-2.2-.6a3 3 0 0 0-.4-1.7 2 2 0 0 0-1.8-.9c-.7 0-1.3.3-1.8.9-.4.5-.6 1.1-.7 1.7h4.7z" class="st3" transform="translate(44.4 18.9)"></path>
        <path id="top" fill="#ffffff" d="M6.4 4.2C6.4 5.4 6 6.4 5.3 7c-.7.6-1.7.9-3 .9L.7 7.8V1L2.6.9c1.2 0 2.1.3 2.7.8.8.6 1.1 1.4 1.1 2.5zm-1.2 0c0-.8-.2-1.4-.6-1.8-.4-.4-1.1-.6-1.9-.6l-.9.1V7h.8c.8 0 1.5-.2 2-.7.4-.5.6-1.2.6-2.1zm7.4 1.1c0 .8-.2 1.4-.7 1.9-.5.5-1.1.8-1.8.8s-1.3-.2-1.7-.7c-.5-.6-.7-1.2-.7-1.9 0-.8.2-1.4.7-1.9.4-.5 1-.7 1.8-.7.7 0 1.3.2 1.8.7.4.4.6 1 .6 1.8zm-1.2 0c0-.5-.1-.8-.3-1.2-.2-.4-.6-.6-1-.6s-.8.2-1 .6l-.3 1.2c0 .5.1.8.3 1.2.2.4.6.6 1 .6s.8-.2 1-.6c.2-.3.3-.7.3-1.2zm9.5-2.4l-1.6 4.9h-1l-.6-2.1-.4-1.6-.4 1.6-.7 2.1h-1l-1.5-4.9h1.1l.6 2.4.3 1.6.4-1.6.7-2.4h.9l.7 2.3.4 1.6.3-1.6.6-2.3h1.2zm5.7 4.9h-1.1V5c0-.9-.3-1.3-1-1.3a1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8v2.9h-1.1V4.3 2.9h1l.1.8.6-.6c.3-.2.6-.3 1-.3.5 0 .9.1 1.2.4.4.4.6.9.6 1.6v3zm3.1 0h-1.1V.6h1.1v7.2zm6.5-2.5c0 .8-.2 1.4-.7 1.9-.5.5-1.1.8-1.8.8s-1.3-.2-1.7-.7c-.4-.5-.7-1.1-.7-1.8 0-.8.2-1.4.7-1.9.4-.5 1.1-.7 1.8-.7s1.3.2 1.8.7c.4.3.6.9.6 1.7zm-1.1 0c0-.5-.1-.8-.3-1.2-.2-.4-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.3.7-.3 1.2s.1.8.3 1.2c.2.4.6.6 1 .6s.8-.2 1-.6c.2-.3.3-.7.3-1.2zm6.5 2.5h-1l-.1-.6c-.3.5-.8.7-1.5.7-.5 0-.9-.1-1.1-.4-.3-.3-.4-.6-.4-1 0-.6.3-1.1.8-1.4a4 4 0 0 1 2.1-.5v-.1c0-.7-.3-1-1-1a2 2 0 0 0-1.3.4l-.2-.7a3 3 0 0 1 1.7-.4c1.3 0 2 .7 2 2v1.8 1.2zm-1.2-1.7v-.8c-1.2 0-1.8.3-1.8 1l.2.6.6.2.7-.2.4-.6-.1-.2zm7.5 1.7h-1l-.1-.8c-.3.6-.8.9-1.6.9-.6 0-1.1-.2-1.5-.7-.4-.5-.6-1.1-.6-1.8 0-.8.2-1.4.6-1.9.4-.5.9-.7 1.5-.7.7 0 1.1.2 1.4.7V.6h1.1v5.9l.2 1.3zm-1.2-2.1v-.8-.3l-.4-.7a1 1 0 0 0-.7-.3c-.4 0-.7.2-1 .5-.2.3-.4.7-.4 1.3 0 .5.1.9.3 1.2.2.3.6.5 1 .5s.7-.1.9-.4c.2-.3.3-.6.3-1zm10.7-.4c0 .8-.2 1.4-.7 1.9-.5.5-1.1.8-1.8.8s-1.3-.2-1.7-.7c-.4-.5-.7-1.1-.7-1.8 0-.8.2-1.4.7-1.9.4-.6 1-.8 1.8-.8.7 0 1.3.2 1.8.7.3.4.6 1 .6 1.8zm-1.2 0c0-.5-.1-.8-.3-1.2-.2-.4-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.3.7-.3 1.2s.1.8.3 1.2c.2.4.6.6 1 .6s.8-.2 1-.6c.2-.3.3-.7.3-1.2zm7.1 2.5h-1.1V5c0-.9-.3-1.3-1-1.3a1 1 0 0 0-.8.4c-.2.2-.3.5-.3.8v2.9H59V4.3 2.9h1v.7l.6-.6c.3-.2.6-.3 1-.3.5 0 .9.1 1.2.4.4.4.6.9.6 1.6v3.1zm7.5-4.1h-1.2v2.4c0 .6.2.9.6.9l.5-.1v.8l-.9.1c-.4 0-.8-.1-1-.4-.2-.3-.4-.7-.4-1.3V3.7h-.7v-.8h.7v-1l1.1-.3v1.2h1.2l.1.9zm5.8 4.1h-1.1V5c0-.9-.3-1.3-1-1.3-.5 0-.9.3-1.1.8l-.1.4v3h-1.1V.6h1.1v3c.3-.5.8-.8 1.5-.8.5 0 .8.1 1.1.4.4.4.6.9.6 1.7v2.9zm6.1-2.7v.5h-3.3c0 .5.2.9.5 1.1.3.2.6.3 1.1.3l1.3-.2.2.8c-.5.2-1 .3-1.7.3-.8 0-1.4-.2-1.8-.7-.4-.5-.7-1.1-.7-1.8s.2-1.4.6-1.9c.4-.5 1-.8 1.7-.8s1.3.3 1.6.8c.3.5.5 1 .5 1.6zm-1.1-.3l-.2-.8a1 1 0 0 0-.9-.5c-.4 0-.7.1-.9.4-.2.2-.3.5-.3.9h2.3z" class="st3" transform="translate(45.5 6.3)"></path>
    </svg>
        </a>   
    )
}

export default AppStore;
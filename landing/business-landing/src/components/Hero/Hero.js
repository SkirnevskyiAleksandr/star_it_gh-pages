import React from 'react';
import Download from "../Download/Download";

import "./style/hero.css";
import "./style/description.css";
import "./style/visual.css";

import img from "./img/foto.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="row">
                <div className="hero__wrap">
                    <div className="hero__item">
                        <img src={img} alt="img" className="hero__img" width="400" height="595"/>
                    </div>
                    <div className="hero__item">
                        <div className="description">
                            <h2 className="description__title"><span className="description__mark">Маркетинг</span> без обратной связи - как современный телевизор без пульта</h2>

                            <p className="description__text">StarIt! позволит вам узнавать недостатки и преимущества вашего продукта без лишних телодвижений</p>
                            <Download/>
                        </div>
                    </div>
                </div>
                <div className="visual"/>
            </div>
        </div>
    );
};

export default Hero;
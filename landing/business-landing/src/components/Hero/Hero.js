import React from 'react';
import Download from "../Download/Download";

import "./style/hero.css";
import "./style/description.css";
import "./style/circle.css";

import img from "./img/foto.png";

const Hero = () => {
    return (
        <section className="hero row">
            <div className="hero__item">
                <img src={img} alt="img" className="hero__img" width="400" height="595"/>
            </div>
            <div className="hero__item circle">
                <div className="description">
                    <h1 className="description__text">StarIt! позволит вам узнавать недостатки и преимущества вашего
                        продукта без лишних телодвижений</h1>
                    <p className="description__title"><span className="description__mark">Маркетинг</span> без обратной
                        связи - как современный телевизор без пульта</p>
                    <Download/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
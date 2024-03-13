import React from 'react';
import Button from '../UI/Button/Button';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://s3-alpha-sig.figma.com/img/8354/c0a8/579180fd272afd63598cafc72d2f6cc3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocYY6jMzDuHQrmgMeIfGWcP9XnwZW4qslBwUYJl8GH17HlVQjIA3FE3dGfyBcbO7KHC3JOwp~7i-j5Kj3uQBa1shZbp4jZIEkfoFNaAIdvFXdu4Pbxl~c7V~clz~vQwvh85ediGm1Ig~BZlL9vsif2G7cG4IqGZ1hhB~sbijN5rcBRTN5RIwOglZpPcvYNY1CB3Zm0kE2TsuZeTKLNPleuO0dbIbe1K76v5QN~bwP5R3bHlicbq~EIPw59BW5QwQhUySKU~1Fz8SrOITnRcn9b8noxow1zsumLEP8uyX2ldlyl3QRwUdgVqHWNSfXJiaI21af5Rhn89hpvrAeggE4A__" alt="CodeLab Logo" />
            </div>
            <div className="header__info">
                <h1 className="header__info__title">
                    CodeLab
                </h1>
                <h2 className="header__info__subtitle">
                    Лаборатория программирования для новичков
                </h2>
            </div>
            <div className="header__description">
                <h1 className="header__title">
                    Тренируй свои навыки не напрягаясь
                </h1>
                <h2 className="header__subtitle">
                    Развивай свои навыки с помощью онлайн игр
                </h2>
            </div>
            <div className="header__button">
                <Button />
            </div>
            <div className="header__have-account">
                <a href="#" className="header__account-link">У меня уже есть аккаунт</a>
            </div>
        </div>
    );
};

export default Header;

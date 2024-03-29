import React from 'react';
import AuthButtons from './AuthButtons'; 
const Header: React.FC = () => {
    return (
        <header>
            <section className="section header-menu">
                <div className="section__wrapper container menu__wrapper">
                    <button className="navbar-toggler" id="navbar-toggler" type="button">
                        <img src="img/Hamburger_icon.svg (1).png" width="30px" alt="Hamburger Icon" />
                    </button>
                    <div className="menu">
                        <a className="logo" href="#">GoTrieop</a>
                        <ul className="mainmenu__list">
                            <li className="mainmenu__item">
                                <a className="menu__link" href="#">Home</a>
                            </li>
                            <li className="mainmenu__item">
                                <a className="menu__link" href="#">Services</a>
                            </li>
                            <li className="mainmenu__item">
                                <a className="menu__link" href="#">Pricing</a>
                            </li>
                            <li className="mainmenu__item">
                                <a className="menu__link" href="#">Contact</a>
                            </li>     
                        </ul>
                        <AuthButtons signUpText="Sign up" loginText="Login" />
                    </div>    
                </div>   
            </section>
        </header>
    );
};

export default Header;
import React from 'react';

interface AuthButtonsProps {
    signUpText: string;
    loginText: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ signUpText, loginText }) => {
    return (
        <div className="log">
            <a className="menu__link sig" href="#">{signUpText}</a>
            <a className="btn" href="#">{loginText}</a> 
        </div>
    );
};

export default AuthButtons;
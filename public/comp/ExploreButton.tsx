import React from 'react';

interface ExploreButtonProps {
    buttonText: string;
    buttonClass: string;
    buttonLink: string;
    divname : string;
}

const ExploreButton: React.FC<ExploreButtonProps> = ({ buttonText, buttonClass, buttonLink , divname}) => {
    return (
        <div className={divname}>
            <a className={buttonClass} href={buttonLink}>{buttonText}</a>
        </div>
    );
};

export default ExploreButton;
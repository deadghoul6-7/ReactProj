import React from 'react';
import ExploreButton from './ExploreButton';

const GetStartedComponent: React.FC = () => {
    return (
        <div className="gstarted">
            <div className="gstarted_card">
                <div className="circles1">
                    <img src="img/Group 1.png" alt="Circle 1"></img>
                </div>
                <div className="circles2">
                    <img src="img/Group 2.png" alt="Circle 2"></img>
                </div>
                <div className="gsh1">
                    Prepare Yourself And<br />
                    Start Exploring With Us.
                </div>
                <div className="gsh2">
                    There's the best discount for you today.
                </div>
                <ExploreButton buttonText="Get Started" buttonClass="btn3" buttonLink="#" divname= "enb2" />
            </div>
        </div>
    );
};

export default GetStartedComponent;
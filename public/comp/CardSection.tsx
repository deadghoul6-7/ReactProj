import React from 'react';
import ExploreButton from './ExploreButton';

const CardSection: React.FC = () => {
    return (
        <div className="container">
            <div className="cards">
                <div className="co"></div>
                <div className="cardtxt">
                    <div className="ctxt1">
                        Choice of
                    </div>
                    <div className="ctxt2">
                        Destinations
                    </div>
                    <div className="h3">
                        explore the beauty of god's earth in a <br />
                        beautiful forest and have fun
                    </div>
                    <ExploreButton buttonText="Explore now" buttonClass="btn2" buttonLink="#" divname="enb1" />
                </div>
                <div className="crdph">
                    <div className="card">
                        <a className="border" href="#"><img src="img/Vector 1.svg" alt="" /></a>
                        <img className="gg" src="img/Rectangle 24.png" />
                    </div>
                    <div className="card2">
                        <img className="gg" src="img/Rectangle 25.png" />
                    </div>
    
                    <div className="card3">
                        <img className="gg" src="img/Rectangle 24.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardSection;
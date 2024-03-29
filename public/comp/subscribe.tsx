import React from 'react';
import ExploreButton from './ExploreButton';

const subscribe: React.FC = () => {
    return (
        <div className="subscribe">
            <div className="ctxt2">
                Subscribe<br />
                To Our Newsletter
            </div>
            <div className="mail">
                <input placeholder="Yourmail@mail.com" className="hgg" />
                <ExploreButton buttonText="Subscribe" buttonClass="btn5" buttonLink="#" divname= "subscribe_button" />
            </div>
        </div>
    );
};

export default subscribe;
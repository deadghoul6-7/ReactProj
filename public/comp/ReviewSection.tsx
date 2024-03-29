import React from 'react';
import StarRating from './StarRating'; // Import the StarRating component

const ReviewSection: React.FC = () => {
    const starImages = ["img/Star 1.png", "img/Star 1.png", "img/Star 1.png", "img/Star 4.png", "img/Star 4.png"];

    return (
        <div className="review">
            <div className="revph">
                <img src="img/image 11.png" alt="Customer Image" />
            </div>
            <div className="revtxt">
                <div className="ctxt3">
                    What do customers say <br />
                    about us?
                </div>
                <div className="usr">
                    <div className="uspic">
                        <img src="img/image 8.png" alt="User Image" />
                    </div>
                    <div className="usrname">
                        <div className="ctxt4">
                            Alpanasap
                        </div>
                        <div className="location">
                            Japung, Indonesia
                        </div>
                    </div>
                    <div className="revtext">
                        Very satisfying service makes it comfortable, a beautiful place in the world.
                    </div>
                </div>
                <StarRating starImages={starImages} /> 
            </div>
        </div>
    );
};

export default ReviewSection;
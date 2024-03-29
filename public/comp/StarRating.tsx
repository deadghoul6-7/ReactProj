import React from 'react';

interface StarRatingProps {
    starImages: string[];
}

const StarRating: React.FC<StarRatingProps> = ({ starImages }) => {
    return (
        <div className="left">
            {starImages.map((image, index) => (
                <div key={index} className="star">
                    <img src={image} alt="Star Image" />
                </div>
            ))}
        </div>
    );
};

export default StarRating;
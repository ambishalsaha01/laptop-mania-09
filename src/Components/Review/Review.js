import React from 'react';

const Review = (props) => {
    const {name, picture, description, ratings} = props.user;
    return (
        <div className='user-container'>
            <div className="user-img-container">
                <img src={picture} alt="" />
            </div>
            <div className="user-review-container">
                <h3>Name: {name}</h3>
                <p><small>{description}</small></p>
                <p>Ratings: {ratings}</p>
            </div>
        </div>
    );
};

export default Review;
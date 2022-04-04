import React from 'react';
import UsersReview from '../../hooks/UsersReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [users, setUsers] = UsersReview();
    return (
        <div className='review-container container'>
            {
                users.map(user => <Review
                    key={users.id}
                    user={user}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;
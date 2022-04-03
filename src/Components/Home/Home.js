import React from 'react';
import UsersReview from '../../hooks/UsersReview';
import User from '../User/User';
import './Home.css'
import images from './laptop.png'

const Home = () => {
    const [users, setUsers] = UsersReview();
    // console.log(users)

    return (
        <div>
            {/* Home container start here */}
            <div className='home-container container'>
                <div className="text-container">
                    <h1>Your Next Laptop</h1>
                    <h1 className='second-heading'>Your Best Laptop</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus nisi quo quidem quam. Ipsam ipsum quasi sapiente ipsa hic possimus nihil vitae? Ipsum quos ad nihil deserunt excepturi voluptatibus!</p>
                    <button className='demo-btn'>Live Demo</button>
                </div>
                <div className="img-container">
                    <img src={images} alt="" />
                </div>
            </div>
            {/* Review container start here */}
            <div className="container">
                <h2>Customer Review{users.length}</h2>
                <div className="review-container">
                    {
                        users.slice(0, 3).map(user => <User
                            key={user.id}
                            user={user}
                        ></User>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
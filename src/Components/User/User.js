import React from 'react';

const User = (props) => {
    const {name, picture, description, ratings} = props.user;
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    );
};

export default User;
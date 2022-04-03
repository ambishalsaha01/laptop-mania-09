import React from 'react';

const User = (props) => {
    const {name, picture, discription, ratings} = props.user;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default User;
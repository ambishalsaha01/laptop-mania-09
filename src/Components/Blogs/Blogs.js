import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blogs-container'>
            <div className="first-qus">
                <h2>What Is The Perhaps Of Context API?</h2>
                <p>The React Context API is a way for produce global variables that can be passed anywhere. This is the alternative to prop drilling. it is moving props from grandparent to child to parent, and so on. context API allows one to share state across the entire component.</p>
            </div>
            <div className="second-qus">
                <h2>What Is Semantic Tag?</h2>
                <p>Semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content. it is much easier to read and greater accessibility. A semantic element clearly describes its meaning to both the browser and the developer.</p>
            </div>
        </div>
    );
};

export default Blogs;
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {


    return (
        <>
            <h1 className='text-3xl font-bold text-center my-4'>Blog</h1>
            <ReactToPdf targetRef={ref} filename="blog.pdf">
                {({ toPdf }) => (
                    <button className='btn btn-primary relative left-1/2 -ms-20 mb-4' onClick={toPdf}>Download Blog</button>
                )}
            </ReactToPdf>
            <div className="hero bg-base-200">
                <div ref={ref} className="hero-content">
                    <div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span> Tell us the differences between uncontrolled and controlled components.</p>
                            <p className=""><span className='font-bold'>A:</span> Controlled components in React have their values managed by React's state. Changes to the component's value are handled by updating the state. When the user interacts with the component, React updates the state and the component is re-rendered with the new value.
                                <br />
                                Uncontrolled components, on the other hand, have their values managed by the DOM. Changes to the component's value are not handled by React, but instead are read from the DOM using a ref. When the user interacts with the component, the DOM is updated with the new value.</p>
                        </div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span> How to validate React props using PropTypes?</p>
                            <p className=""><span className='font-bold'>A:</span>PropTypes is a package in React that lets you define the expected types of props for a component. You can use PropTypes to validate props, catching errors early on in development and making your components more reliable. To use PropTypes, define a propTypes object as a static property of your component and assign the expected prop types to each property.</p>
                        </div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span> Tell us the difference between nodejs and express js.</p>
                            <p className=""><span className='font-bold'>A:</span> Node.js is a JavaScript runtime built on the V8 JavaScript engine, while Express.js is a web framework for Node.js that simplifies the process of building web applications.</p>
                        </div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span>
                                What is a custom hook, and why will you create a custom hook?</p>
                            <p className=""><span className='font-bold'>A:</span> A custom hook is a function in React that allows you to reuse logic across multiple components. Custom hooks can abstract complex logic into reusable pieces, making code more organized and easier to maintain.
                                <br />
                                You would create a custom hook to extract repetitive logic from components and reuse it in a modular way. This can improve code readability and help prevent duplication of code. Custom hooks can be used for tasks like data fetching, form validation, authentication, and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;
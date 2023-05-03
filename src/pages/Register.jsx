// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [photo, setPhoto] = useState(null);

    const handleRegister = event => {
        event.preventDefault();
        console.log("clicked");

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col mb-5">
                    <div className="text-center my-10">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input onBlur={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input onBlur={(e) => setPhoto(e.target.value)} type="text" name="photo" id="photo" placeholder="Your Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Your Email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder='Your Password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Sign Up</button>
                            </div>
                        </form>
                        <div>
                            <label className="label label-text-alt">
                                Already a member?<Link to='/login' className="label-text-alt link link-hover">Login Here</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
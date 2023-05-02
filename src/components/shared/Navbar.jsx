// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        //login code
    }
    return (
        <div className="navbar bg-secondary flex justify-between font-bold">
            <div className="">
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Chef Recipe Hunter</Link>
            </div>

            <div className=''>
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/home' className={({ isActive }) => (isActive ? "bg-secondary-focus" : "")}>Home</NavLink></li>
                    <li><NavLink to='/blog' className={({ isActive }) => (isActive ? "bg-secondary-focus" : "")}>Blog</NavLink></li>
                </ul>
            </div>
            <div className="">
                {user ?
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="http://placebeard.it/640x480" />
                        </div>
                    </label> :
                    <button className='btn btn-primary' onClick={handleLogin}>Login</button>}
            </div>

        </div>
    );
};

export default Navbar;
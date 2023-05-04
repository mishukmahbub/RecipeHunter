// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className="navbar bg-secondary flex-col md:flex-row justify-between font-bold">
            <div className="">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Chef Recipe Hunter</Link>
            </div>
            <div>
                <div className=''>
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? "bg-secondary-focus" : "")}>Home</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => (isActive ? "bg-secondary-focus" : "")}>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="">
                    {user ?
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip  tooltip-bottom" data-tip={user.displayName}>
                                <div className="w-10 rounded-full">
                                    <img src="http://placebeard.it/640x480" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li><a onClick={() => logOut()}>Logout</a></li>
                            </ul>
                        </div> :
                        <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
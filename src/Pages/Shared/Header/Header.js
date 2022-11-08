import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <img className='w-12' src={logo} alt=''/>
                    <Link to='/'><a className="btn btn-ghost normal-case text-2xl text-violet-600 font-bold">Wild <span className='mx-2 text-violet-400'>vs.</span> Camera</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-green-700">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>My Reviews</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn'></button>
                </div>
            </div>
        </div>
    );
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost normal-case text-2xl text-violet-600 font-bold">Wild <span className='mx-2 text-violet-400'>vs.</span> Camera</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Home</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>My Reviews</Link></li>
                        <li><Link>Blogs</Link></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
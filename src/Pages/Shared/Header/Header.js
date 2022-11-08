import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    console.log(user)

    const handleLogout = () => {
        logout()
        .then(()=>{})
        .catch(error=> console.error(error))
    }



    return (
        <div>
            <div className="navbar bg-base-200">
                <div className="navbar-start">
                    <img className='w-12' src={logo} alt='' />
                    <Link to='/' ><a className="btn btn-ghost normal-case text-2xl text-violet-600 font-bold">Wild <span className='mx-2 text-violet-400'>vs.</span> Camera</a></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-green-700">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        {
                            user?.uid ?
                                <>
                                    <li><Link to='/myReview'>My Reviews</Link></li>
                                    <li><Link to='/addService'>Add Service</Link></li>
                                </>
                                :
                                <>
                                </>
                        }
                        <li><Link to='/blogs'>Blogs</Link></li>

                    </ul>
                </div>
                <div className="navbar-end gap-1">
                    {
                        user?.uid ?
                            <>
                                <p>{user?.email}</p>
                                <Link to='' onClick={handleLogout}><button className='btn btn-outline bg-red-600 text-white hover:bg-red-700 border-none'>Log Out</button></Link>
                            </>
                            :
                            <>
                                <Link to='/login'><button className='btn btn-outline bg-green-700 text-white hover:bg-green-900 border-none'>Login</button></Link>
                                <Link to='/signup'><button className='btn btn-outline bg-violet-700 text-white hover:bg-violet-900 border-none'>Sign Up</button></Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
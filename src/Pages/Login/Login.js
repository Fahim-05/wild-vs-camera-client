import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login/login.svg';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={login} alt='' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-4xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                               <small>New to this site? please <Link to='/signUp' className='text-violet-700 underline'>Sign Up</Link></small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
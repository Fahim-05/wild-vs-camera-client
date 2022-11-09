import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/login/login.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const {login, loading} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
        })
        .catch(error => console.error(error));
    }
    if (loading) {
        return <progress className="progress w-full"></progress>
    }



    return (
        <div className="hero">
            <div className="hero-content flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt='img' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-4xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                               <small>New to this site? please <Link to='/signup' className='text-violet-700 underline'>Sign Up</Link></small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-outline text-emerald-600 hover:bg-emerald-600' type='submit' value='LogIn'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
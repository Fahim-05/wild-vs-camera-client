import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/signup/signup.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {

    const { createUser, loading } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=> {
            const user = result.user;
        })
        .catch(error => console.error(error));
    }
    if (loading) {
        return <progress className="progress w-full"></progress>
    }

    return (
        <div className="hero">
            <div className="hero-content flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={signup} alt='' />
                </div>
                <div className="card flex-shrink-0 max-w-sm w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <small>Already have an account? please <Link to='/login' className='text-violet-700 underline'>Login</Link></small>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-outline text-violet-600 hover:bg-violet-600' type='submit' value='Signup' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { _id, title, img, price, rating, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.review.value;
        const name = user?.displayName || 'unregistered';
        const email = user?.email || 'email not found';
        const photoURL = user?.photoURL || 'photo not found';

        const review = {
            service: _id,
            serviceName: title,
            reviewer: name,
            photoURL,
            message,
            email
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset();
                    alert('review added successfully');

                }
            })
            .catch(error => {
                console.error(error)
            });

    }


    return (
        <div >
            <div className='w-9/12 mx-auto my-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className='h-[400px]'><img src={img} alt="Shoes" /></figure>
                    <div className="card-body mt-5">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title text-2xl text-violet-600 font-bold">{title}</h2>
                            <div className='text-end'>
                                <p className='text-base text-orange-600 font-bold'>Price: ${price}</p>
                                <span className='text-base text-emerald-600 font-bold'>Rating: {rating}</span>
                            </div>
                        </div>
                        <div>
                            <p className='text-justify mt-5'><span className='font-bold text-blue-600'>Details:</span> <br />{description}</p>
                        </div>
                        <div className="card-actions justify-center mt-10">
                            <button className="btn btn-primary">Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-9/12 mx-auto mt-20'>
                <p className='my-10 text-2xl text-violet-600 font-semibold underline'>Add Review</p>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Person</th>
                                <th>Review</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="rounded-full w-12 h-12">
                                                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user?.displayName}</div>
                                            <div className="text-sm opacity-50">{user?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <small>this was good click</small>
                                </td>
                            </tr>

                        </tbody>

                    </table>
                </div>
                {
                    user?.uid ?
                        <>
                            <form onSubmit={handleReview} className='my-5'>
                                <input type='text' name='review' placeholder='comment here' className='input input-ghost w-full bg-violet-100' />
                                <input className='my-5 btn btn-outline bg-violet-500 text-white hover:bg-violet-600' type='submit' value='Add Review' />
                            </form></>
                        :
                        <>
                        <p className='my-10 font-semibold text-xl text-orange-600'>Please login to add review <Link to='/login' className='text-blue-600 underline'>Login</Link></p>
                        </>
                }


            </div>
        </div>
    );
};

export default ServiceDetails; <h1>Service details</h1>
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, price, rating, description } = useLoaderData();
    return (
        <div className='flex flex-row justify-between my-10'>
            <div className='w-5/12 '>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure className='h-[300px]'><img src={img} alt="Shoes" /></figure>
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
            <div className='w-6/12'>

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
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
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
                <div className='my-5'>
                    <input type='text' placeholder='comment here' className='input input-ghost w-full bg-violet-100'/>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails; <h1>Service details</h1>
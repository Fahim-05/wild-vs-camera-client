import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {img, price, title, description} = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-violet-700">{title}</h2>
                <p className='text-left text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-left'>{description.length > 100 ?
                            <>{description.slice(0, 100) + '...'} <Link to={``} className='text-decoration-none text-blue-400 hover:text-blue-600'>See details</Link></>
                            :
                            <>{description}</>
                        }</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline hover:bg-green-700" >Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    
    return (
        <div>
            <div className='my-10'>
                <p className='text-2xl font-bold text-violet-700'>I Provide</p>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, libero!</small>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                    }
            </div>
            <Link to='/allServices'><button className='btn'>See All</button></Link>
        </div>
    );
};

export default Services;
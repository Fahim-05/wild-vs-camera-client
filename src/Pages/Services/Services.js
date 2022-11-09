import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ServiceCard from '../../Pages/Shared/ServiceCard/ServiceCard';

const Services = () => {
    const {loading} = useContext(AuthContext);

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    if (loading) {
        return <progress className="progress w-full"></progress>
    }


    
    return (
        <div className='my-10'>
            <div className='my-10'>
                <p className='text-2xl font-bold text-violet-700'>I Provide</p>
                <small>These different services</small>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-10/12 mx-auto'>
                    {
                        services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                        ></ServiceCard>)
                    }
            </div>
            {/* <Link to='/allServices'><button className='btn'>See All</button></Link> */}
        </div>
    );
};

export default Services;
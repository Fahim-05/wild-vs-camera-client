import React from 'react';

const Features = () => {
    return (
        <div>
            <div className='my-10'>
                <p className='text-orange-600 text-5xl font-semibold'>Features..</p>
            </div>
            <div className='grid grid-cols-4 w-8/12 mx-auto my-10'>
            <div className="indicator">
                <span className="indicator-item indicator-center badge badge-primary h"></span>
                <div className="grid w-32 h-32 bg-orange-300 place-items-center rounded-full hover:bg-red-500 hover:shadow-xl">Fast Delivery</div>
            </div>
            <div className="indicator">
                <span className="indicator-item indicator-center badge badge-primary"></span>
                <div className="grid w-32 h-32 bg-violet-300 place-items-center rounded-full hover:bg-red-500 hover:shadow-xl">Flexible Appointment</div>
            </div>
            <div className="indicator">
                <span className="indicator-item indicator-center badge badge-primary"></span>
                <div className="grid w-32 h-32 bg-sky-300 place-items-center rounded-full hover:bg-red-500 hover:shadow-xl">Online Consultancy</div>
            </div>
            <div className="indicator">
                <span className="indicator-item indicator-center badge badge-primary"></span>
                <div className="grid w-32 h-32 bg-purple-300 place-items-center rounded-full hover:bg-red-500 hover:shadow-xl">Friendly</div>
            </div>
        </div>
        </div>
    );
};

export default Features;
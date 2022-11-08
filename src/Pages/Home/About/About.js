import React from 'react';
import background from '../../../assets/about-image/background.jpg';
import person from '.././../../assets/about-image/person.jpg';

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2 relative'>
                    <img src={background} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <img src={person} className="absolute w-20 h-20 top-2 left-2 rounded-lg border-4 border-violet-600" alt=''/>
                </div>
                <div className='w-1/2'>
                    <p className='text-violet-600 font-bold my-3 text-xl text-right hover:underline'>About Me</p>
                    <h1 className="text-5xl font-bold text-end text-orange-600">Experienced <br/>for<br/> Professional Click</h1>
                    <p className="py-6 text-right text-gray-500">I provide professional service and consultancy about wild photography in different categories. You can choose on of them, and review my works. Thank you.</p>
                    <button className="btn bg-green-700 hover:bg-green-800 shadow-xl">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import img1 from '../../../assets/sample/1.jpg';
import img2 from '../../../assets/sample/2.jpg';
import img3 from '../../../assets/sample/3.jpg';
import img4 from '../../../assets/sample/4.jpg';

const Sample = () => {
    return (
        <div className='bg-green-100 py-10'>
            <p className='text-4xl text-green-600 font-bold my-10'>Sample</p>
            <div className='w-10/12 mx-auto grid grid-cols-4 gap-5'>
                <img src={img1} className=" rounded-lg shadow-2xl border-2  border-violet-500 hover:translate-y-4 hover:border-orange-500" alt='' />
                <img src={img2} className=" rounded-lg shadow-2xl border-2  border-violet-500 hover:translate-y-4 hover:border-orange-500" alt='' />
                <img src={img3} className=" rounded-lg shadow-2xl border-2  border-violet-500 hover:translate-y-4 hover:border-orange-500" alt='' />
                <img src={img4} className=" rounded-lg shadow-2xl border-2  border-violet-500 hover:translate-y-4 hover:border-orange-500" alt='' />
            </div>
        </div>
    );
};

export default Sample;
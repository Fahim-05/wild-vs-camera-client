import React, { useEffect, useState } from 'react';

const MyReviewRow = ({ rev, handleDelete }) => {
    const { _id, serviceName, service, reviewer, photoURL, message, email } = rev;
    const [reviewedService, setReviewedService] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewedService(data))
    }, [service])



    return (
        <div className=''>
            <tr className='grid grid-cols-5'>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex space-x-3">
                        <div className="avatar">
                            <div className="rounded w-10 h-10">
                                {
                                    reviewedService?.img &&
                                    <img src={reviewedService.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-sm">{serviceName}</div>
                        </div>
                    </div>

                </td>
                <td className='border-green-300 border my-2'>
                    <small className=''>{message}</small>
                </td>
                <td>
                    <div className="flex space-x-3">
                        <div className="avatar">
                            <div className="rounded-full w-10 h-10">
                                {
                                    reviewedService?.img &&
                                    <img src={reviewedService.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-semibold text-sm">{reviewer}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>

                </td>
                <div className='mt-5 ml-16'>
                    <button className='btn btn-outline'>Update</button>
                </div>

            </tr>




        </div>
    );
};

export default MyReviewRow;
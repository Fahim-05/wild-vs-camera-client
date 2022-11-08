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
        <div>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-12 h-12">
                                {
                                    reviewedService?.img &&
                                    <img src={reviewedService.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{reviewer}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <small className='text-end'>{message}</small>
                </td>
            </tr>
        </div>
    );
};

export default MyReviewRow;
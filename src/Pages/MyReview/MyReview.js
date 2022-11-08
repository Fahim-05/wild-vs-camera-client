import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure? ');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                })
        }
    }




    return (
        <div className='my-10'>
            {
                review.length > 0 ?
                    <>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Person</th>
                                        <th>Review</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        review.map(rev => <MyReviewRow
                                            key={rev._id}
                                            rev={rev}
                                            handleDelete={handleDelete}
                                        ></MyReviewRow>)
                                    }

                                </tbody>

                            </table>
                        </div>
                    </>
                    :
                    <>
                    <p className='text-5xl text-red-600 mt-40'>No reviews were added!</p>
                    </>

            }

        </div>
    );
};

export default MyReview;
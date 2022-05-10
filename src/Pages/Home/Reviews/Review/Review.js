import React from 'react';

const Review = ({ review }) => {
    const { reviews, img, name, address } = review;
    return (
        <div className="card max-w-lg shadow-xl p-5">
            <div className="card-body">
                <p>{reviews}</p>
            </div>
            <figure>
                <img className='w-16' src={img} alt="Shoes" />
                <div className='ml-3'>
                    <h2 className="card-title">{name}</h2>
                    <p>{address}</p>
                </div>
            </figure>
        </div>
    );
};

export default Review;
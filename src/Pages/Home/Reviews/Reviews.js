import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import Review from './Review/Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            'reviews': 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            'img': people1,
            'name': 'Winson Herry',
            'address': 'England'
        },
        {
            _id: 2,
            'reviews': 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            'img': people2,
            'name': 'Harry Kane',
            'address': 'Australia'
        },
        {
            _id: 3,
            'reviews': 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            'img': people3,
            'name': 'Joao Felix',
            'address': 'California'
        }
    ]
    return (
        <div className='my-28'>
            <div className='flex justify-between my-10'>
                <div>
                    <h4 className='text-accent font-bold'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;
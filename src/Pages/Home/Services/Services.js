import React from 'react';
import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Service from './Service/Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            "name": "Fluoride Treatment",
            "img": floride,
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 2,
            "name": "Cavity Filling",
            "img": cavity,
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id: 3,
            "name": "Teeth Whitening",
            "img": whitening,
            "description": "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h1 className='text-primary text-2xl my-5 font-bold uppercase'>Our Services</h1>
                <h3 className='text-3xl uppercase'>Services We Provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {services.map(service => <Service key={service._id} service={service}></Service>)}
            </div>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='sm:w-full lg:w-1/3 lg:m-16 rounded' src={treatment} />
                    <div>
                        <h1 className="text-5xl font-bold uppercase">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;
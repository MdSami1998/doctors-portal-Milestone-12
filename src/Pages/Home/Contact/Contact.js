import React from 'react';
import appoinment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{ background: `url(${appoinment})` }} className='my-28'>
            <div className='text-center pt-16'>
                <h3 className='text-accent text-xl font-bold'>Contact Us</h3>
                <h4 className='text-3xl '>Stay Connected With Us</h4>
            </div>
            <form className='flex flex-col items-center py-16'>
                <input className='w-96 p-2 rounded border-none outline-none text-black' type="email" name="" placeholder='Email Address' />
                <br />
                <input className='w-96 p-2 rounded border-none outline-none text-black' type="text" name="" placeholder='Subject' />
                <br />
                <textarea className='w-96 p-2 rounded border-none outline-none text-black' name="" rows="5" placeholder='Your Message'></textarea>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary mt-5 px-8">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
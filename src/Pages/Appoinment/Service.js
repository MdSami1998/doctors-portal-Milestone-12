import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto">{name}</h2>
                <p>{
                    slots.length ? <span>{slots[0]}</span> :
                        <span className='text-red-400'>Try another date</span>
                }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className="btn modal-button btn-primary bg-gradient-to-r from-secondary to-primary" disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                    >Book Appoinment</label>

                </div>
            </div>
        </div>
    );
};

export default Service;
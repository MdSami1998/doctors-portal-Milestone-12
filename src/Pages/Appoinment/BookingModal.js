import React from 'react';
import { format } from 'date-fns';


const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;

    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-accent w-full max-w-xs font-bold" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' placeholder="Your name" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="email" name='email' placeholder="Email address" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="text" name='phone' placeholder="Phone number" className="input input-bordered input-accent w-full max-w-xs" />

                        <input type="submit" value='submit' className="input input-bordered input-accent w-full max-w-xs btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;
import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const AppoinmentBanner = ({date,setDate}) => {
    return (
        <section className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse flex-1">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl " alt="Dentist's Chair" />
                <div className='flex-1'>
                    <DayPicker
                     mode="single"
                     selected={date}
                     onSelect={setDate}
                     ></DayPicker>
                    <p className='font-bold'>Date Selected: {format(date, 'PP')}</p>
                </div>
            </div>
        </section>
    );
};

export default AppoinmentBanner;
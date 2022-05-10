import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appoinment from '../../../assets/images/appointment.png'


const MakeAppoinment = () => {
    return (
        <section style={{ background: `url(${appoinment})` }} className='flex justify-center items-center'>
            <div className='flex-1 mt-[-100px] hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 p-3 lg:p-12'>
                <h3 className='text-2xl text-accent font-bold'>Appoinment</h3>
                <h2 className='text-3xl text-white font-bold my-3'>Make Appoinment Today</h2>
                <p className='text-white lg:text-justify leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, praesentium voluptatum. Omnis eos voluptatibus molestias deserunt deleniti. Repellendus, repellat recusandae similique error distinctio dolorem perferendis qui rerum, amet aut est sapiente minus, at consequatur aspernatur unde dignissimos sequi nesciunt rem suscipit quibusdam! Qui atque rerum est delectus fuga excepturi necessitatibus!</p>
            </div>
        </section>
    );
};

export default MakeAppoinment;
import React from 'react'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

// Images
import Watch from '../../assets/images/contact.png'

const Contact = () => {
    return (
        <section data-aos={"zoom-in-up"} id='contact-us' className='container '>
            <div className='bg-[#F6F6F6] rounded-[22px] py-10 sm:px-10 px-4 md:px-24 flex flex-wrap items-center justify-between gap-[40px] mb-24'>
                <div>
                    <h2 className='text-2xl md:text-4xl text-[#1E1D1D] font-bold mb-3'>Subscribe To Newsletter</h2>
                    <p className='md:font-semibold text-colorGray'>Get free guide about smart watches daily. </p>
                    <label className='relative'>
                        <input className='w-full h-[60px] mt-6 font-semibold outline-none bg-white pl-[30px] pr-32 rounded-[15px] text-[14px] sm:text-[16px]' type="text" placeholder='Enter Email Address' />
                        <button className='h-[45px] w-[112px] flex justify-center items-center bg-colorBlue rounded-[12px] font-semibold text-white text-[15px] md:text-[16px] absolute right-2 -top-[11px] pb-[2.5px] active:scale-95 hover:opacity-[.98] duration-200'>Subscribe</button>
                    </label>
                </div>
                <img src={Watch} alt="Watch img" className='lg:order-2 -order-1' />
            </div>
        </section>
    )
}

export default Contact

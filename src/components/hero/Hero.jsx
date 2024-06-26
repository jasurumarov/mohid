import React from 'react'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

// Images
import HeroImg from '../../assets/images/hero-img.png'

// Icons
import { IoSearch } from 'react-icons/io5'

const Hero = () => {
    return (
        <section className='bg-colorBlack pt-36 pb-44'>
            <div data-aos="fade-right" className='container flex flex-wrap items-center justify-between gap-10'>
                <div className='lg:max-w-[420px] max-w-[600px]'>
                    <h1 className='font-bold text-white text-[46px] leading-[58px] sm:text-[64px] sm:leading-[78px]'>Discover Most Suitable Watches</h1>
                    <p className='max-w-[400px] mt-6 font-medium text-[#8B8E99]'>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                    <label className='relative'>
                        <IoSearch className='text-colorBlue text-[22px] absolute left-[19px] top-[0px]' />
                        <input className='w-full h-[60px] mt-8 font-semibold outline-none bg-white pl-[56px] pr-32 rounded-[15px]' type="text" placeholder='Find the best brands' />
                        <button className='h-[45px] w-[112px] flex justify-center items-center bg-colorBlue rounded-[12px] font-semibold text-white absolute right-2 -top-[11px] pb-[2.5px] active:scale-95 hover:opacity-[.98] duration-200'>Search</button>
                    </label>
                </div>
                <img src={HeroImg} alt="watch img" className='hidden lg:block' />
            </div>
        </section>
    )
}

export default Hero

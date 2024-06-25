import React from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import Employer1 from '../../assets/images/employer1.png'
import Employer2 from '../../assets/images/employer2.png'

// Icons
import Rating from '../../assets/icons/rating.svg'

const employersData = [
    {
        id: 1,
        title: 'Hamza Faizi',
        desc: 'Don\'t waste time, just order! This is the best website to puschase smart watches.',
        img: Employer1
    },
    {
        id: 2,
        title: 'Hafiz Huzaifa',
        desc: 'I\'ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
        img: Employer2
    },
    {
        id: 3,
        title: 'John Doe',
        desc: 'I\'ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
        img: Employer1
    },
    {
        id: 4,
        title: 'Mike Tomson',
        desc: 'I\'ve been purchasing smart watches of Mohid for a long time. All the products are good quality.',
        img: Employer2
    }
]

const About = () => {
    let empleyers = employersData?.map(empleyer => (
        <SwiperSlide key={empleyer.id} className='bg-[#F6F6F6] rounded-[22px] py-3 md:py-[30px] pl-3 pr-3 md:pl-7 md:pr-7 lg:pl-[34px] lg:pr-[42px] flex flex-wrap lg:flex-nowrap items-center gap-3 md:gap-7 max-w-[524px]'>
            <img src={empleyer.img} alt="employer image" className='w-full lg:w-auto' />
            <div className='flex flex-col gap-2.5'>
                <h3 className='text-[#1E1D1D] text-[20px] sm:text-2xl font-bold'>{empleyer.title}</h3>
                <p title={empleyer.desc} className='text-colorGray font-semibold lg:max-w-[250px] desc text-[14px] sm:text-[16px]'>{empleyer.desc}</p>
                <img className='pb-2 md:pb-0 w-[100px] md:w-[130px]' width={130} height={20} src={Rating} alt="rating of employer" />
            </div>
        </SwiperSlide>
    ))
    return (
        <section className='container mb-[100px]'>
            <p className='text-center text-colorBlue mb-1.5 font-semibold gap-1'>Here are our some of the best clients.</p>
            <h2 className='text-center text-[#1E1D1D] text-3xl md:text-4xl font-bold mb-[50px]'>What People Say About Us</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    976: {
                        spaceBetween: 47,
                    },
                }}
                modules={[Pagination]}
                className='grid grid-cols-2 justify-between gap-5 lg:gap-[47px] pb-16'>
                {empleyers}
            </Swiper>
        </section>
    )
}

export default About
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Icons
import Logo from '../../assets/icons/logo.svg'
import { FaCartShopping, FaUser } from 'react-icons/fa6'
import { FiMenu, FiSearch } from 'react-icons/fi'

const navlinkData = [
    {
        id: 1,
        link: 'Home',
        section: '#'

    },
    {
        id: 2,
        link: 'Brands',
        section: '#trending-products'

    },
    {
        id: 3,
        link: 'Recent Products',
        section: '#recent-products'
    },
    {
        id: 4,
        link: 'Contact',
        section: '#contact-us'

    },
    {
        id: 5,
        link: 'About',
        section: '#about-us'

    }
]

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    let navlinksItem = navlinkData?.map(item => (
        <a key={item.id} href={item.section} className='duration-200 hover:text-white font-medium cursor-pointer'>{item.link}</a>
    ))
    return (
        <header className='z-10 sticky top-0 bg-colorBlack py-[22px]'>
            <nav className='container flex items-center justify-between'>
                <Link to={'/'}>
                    <img src={Logo} alt="site logo" />
                </Link>
                <ul className={`pb-7 pt-1 md:pb-0 md:pt-0 w-full md:w-auto bg-colorBlack text-colorGray flex flex-col md:flex-row items-center justify-center md:justify-start gap-[20px] md:gap-[32px] absolute md:static z-10 left-0 top-[70px] duration-300 origin-top md:shadow-none md:scale-100 ${toggleMenu ? 'scale-y-100' : 'scale-y-0'}`}>
                    {navlinksItem}
                </ul>
                <div className='flex gap-5 md:gap-4 items-center text-white text-[18px]'>
                    <FiSearch className='cursor-pointer' />
                    <FaUser className='cursor-pointer' />
                    <div className='relative text-white cursor-pointer'>
                        <FaCartShopping />
                        <span className='absolute -top-2.5 -right-2.5 bg-[#3858D6] rounded-[50%] w-[18px] h-[18px] flex justify-center items-center text-[10px] border-colorBlack border-2'>1</span>
                    </div>
                    <button onClick={() => setToggleMenu(prev => !prev)} className='md:hidden'><FiMenu className='text-[22px] mt-[3px]' /></button>
                </div>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const { pathname } = useLocation()
    if (pathname === '/register' || pathname === '/admin') {
        return <></>
    }
    return (
        <footer className='bg-colorBlack py-[22px]'>
            <p className='text-center font-semibold text-white text-[14px] md:text-[16px]'>Copyright @ 2022 | Mohid</p>
        </footer>
    )
}

export default Footer

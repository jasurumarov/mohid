import React from 'react'
import { useGetProductsQuery } from '../../context/api/productsApi'

// Icons
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import Rating from '../../assets/icons/rating.svg'

// Images
import NoImg from '../../assets/images/noimg.jpg'

const Products = () => {
    let { data, isFetching } = useGetProductsQuery({ limit: 1000 })

    let products = data?.data?.products?.map(product => (
        <div key={product.id} className='product duration-200 overflow-hidden'>
            <div className='productimg h-[260px] md:h-[337px] bg-[#F6F6F6] flex items-center justify-center relative'>
                {
                    product.urls[0]
                        ? <img src={product.urls[0]} alt={product.title} className='w-[200px] md:w-[250px] h-[250px] object-contain cursor-pointer duration-300' />
                        : <img src={NoImg} alt="no img" className='object-contain md:object-cover w-full h-full duration-300' />
                }
                <div className='absolute z-[9] top-[10px] -right-[36px] flex flex-col gap-2 duration-300'>
                    <button className='w-8 h-8 rounded-[50%] bg-colorBlue text-white text-[16px] flex items-center justify-center cursor-pointer'>
                        <FaHeart />
                    </button>
                    <button className='w-8 h-8 rounded-[50%] bg-[#FF6B6B] text-white text-[16px] pr-[2px] flex items-center justify-center cursor-pointer'>
                        <FaShoppingCart />
                    </button>
                </div>
            </div>
            <h3 title={product.title} className='mt-[11px] mb-2 text-center font-semibold text-[#1E1D1D] text-[18px] lg:text-2xl capitalize title'>{product.title}</h3>
            <div className='flex justify-center'>
                <img src={Rating} alt="rating" className='text-center mb-2 w-[100px] lg:w-auto' />
            </div>
            <div className='flex gap-1 justify-center items-center'>
                <del className='font-semibold lg:text-xl text-colorGray'>${product.oldPrice}</del>
                <h4 className='font-semibold lg:text-xl text-black'>${product.price}</h4>
            </div>
        </div>
    ))

    return (
        <section className='container mb-[135px]'>
            <p className='text-center text-colorBlue mb-1 font-semibold gap-1'>Find your favourite smart watch.</p>
            <h2 className='text-center text-[#1E1D1D] text-3xl md:text-4xl font-bold mb-[65px]'>Our Latest Products</h2>
            <div className='grid gap-6 lg:gap-[49px] grid-cols-2 md:grid-cols-3'>
                {products}
            </div>
        </section>
    )
}

export default Products

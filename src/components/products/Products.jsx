import React, { useState } from 'react'
import { useGetProductsQuery } from '../../context/api/productsApi'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

// MUI
import { Pagination, Box, InputLabel, MenuItem, FormControl } from '@mui/material';
import Select from '@mui/material/Select';

// Icons
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import Rating from '../../assets/icons/rating.svg'

// Images
import NoImg from '../../assets/images/noimg.jpg'
import LoadingSkeleton from '../loading-skeleton/LoadingSkeleton';

const Products = () => {
    const [page, setPage] = useState(+sessionStorage.getItem("page-count") || 1)
    const [perPageCount, setPerPageCount] = useState(+localStorage.getItem("page") || 6)
    let { data, isFetching } = useGetProductsQuery({ limit: perPageCount, page })

    let totalPagination = Math.ceil(data?.data?.count / perPageCount)

    const handleChangePagination = (_, value) => {
        setPage(value)
        sessionStorage.setItem("page-count", value)
    }

    const handleChangePage = e => {
        let value = e.target.value
        setPerPageCount(value)
        localStorage.setItem("page", value)

        let result = Math.ceil(page * perPageCount / value)

        setPage(result)
        sessionStorage.setItem("page-count", result)
    }

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
        <section data-aos={"zoom-in-up"} data-aos-duration="600" data-aos-anchor-placement="top-center" id='recent-products' className='container pt-[135px]'>
            <article className='flex items-center justify-between gap-3 mb-[65px]'>
                <div>
                    <p className=' text-colorBlue text-[14px] sm:text-[16px] mb-1 font-semibold gap-1'>Find your favourite smart watch.</p>
                    <h2 className=' text-[#1E1D1D] text-2xl sm:text-3xl md:text-4xl font-bold'>Our Latest Products</h2>
                </div>
                <Box>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Pages</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={perPageCount}
                            onChange={handleChangePage}
                            autoWidth
                            label="Pages"
                        >
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={12}>12</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </article>
            {
                isFetching
                    ?
                    <LoadingSkeleton perPageCount={perPageCount} />
                    :
                    <div className='grid gap-6 lg:gap-[49px] grid-cols-2 md:grid-cols-3'>
                        {products}
                    </div>
            }
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "64px" }}>
                <Pagination count={totalPagination} page={page} onChange={handleChangePagination} color="primary" />
            </Box>
        </section>
    )
}

export default Products

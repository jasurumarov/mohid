import React, { useState } from 'react'

// Aos
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init()

// Images
import ProductImg1 from '../../assets/images/trendProduct1.png'
import ProductImg2 from '../../assets/images/trendProduct2.png'
import ProductImg3 from '../../assets/images/trendProduct3.png'

const trendProductsData = [
    {
        id: 1,
        title: 'Apple',
        desc: 'Apple is one of the most famous smart watches providing company.',
        img: ProductImg1
    },
    {
        id: 2,
        title: 'Xiaomi',
        desc: 'Xiaomi smart watches are produced by MI company.',
        img: ProductImg2
    },
    {
        id: 3,
        title: 'FitBit',
        desc: 'FitBit smart watches are best for there health and fitness features.',
        img: ProductImg3
    }
]

const TrendingProducts = () => {
    const [imgLoading, setImgLoading] = useState(true);
    setTimeout(() => {
        setImgLoading(false);
    }, 500);
    let trendingProducts = trendProductsData?.map(product => (
        <div key={product.id} className='bg-[#F6F6F6] pl-[41px] pr-[36px] py-[46px] w-full lg:w-[354px] flex gap-6 rounded-[22px]'>
            <img src={product.img} alt="trending watch img" className={`${imgLoading ? "img__loading" : "img__loading-disabled"}`} />
            <div>
                <h2 className='text-[#1E1D1D] font-bold text-4xl pt-2'>{product.title}</h2>
                <p className='lg:max-w-[173px] text-colorGray font-medium leading-5 mt-[9px]'>{product.desc}</p>
            </div>
        </div>
    ))
    return (
        <section data-aos={"zoom-in-up"} data-aos-duration="600" data-aos-anchor-placement="top-center" id='trending-products' className='container pt-[103px] flex flex-wrap justify-center gap-5'>
            {trendingProducts}
        </section>
    )
}

export default TrendingProducts

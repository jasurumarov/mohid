import React from 'react'

// Pages
import Hero from "../../components/hero/Hero"
import Products from "../../components/products/Products"
import TrendingProducts from "../../components/trendingProducts/TrendingProducts"
import About from "../../components/about/About"
import Contact from "../../components/contact/Contact"

const Home = () => {
    return (
        <main>
            <Hero />
            <TrendingProducts />
            <Products />
            <About />
            <Contact />
        </main>
    )
}

export default Home

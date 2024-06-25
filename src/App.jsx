import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Products from "./components/products/Products"
import TrendingProducts from "./components/trendingProducts/TrendingProducts"

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <TrendingProducts/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

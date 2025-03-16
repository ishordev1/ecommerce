import './Shop.css'
import Category from './components/Categories/Category'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/navbar/Navbar'
import NewArrivals from './components/sections/NewArrivals'
import content from './data/content.json'
function Shop() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <NewArrivals />
      {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((item, index) => <Category key={item?.title + index} {...item} />)}
      <Footer content={content?.footer} />
    </>
  )
}

export default Shop

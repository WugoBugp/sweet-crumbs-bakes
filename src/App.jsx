import Hero from "./Components/Hero"
import FeaturedProducts from "./Components/FeaturedProducts"
import MenuCategories from "./Components/MenuCategories"
import SixPackBanner from "./Components/SixPackBanner"
import CookieBuilder from "./Components/CookieBuilder"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <Hero />
      <FeaturedProducts />
      <MenuCategories />
      <SixPackBanner />
      <CookieBuilder />
      <Footer />
    </div>
  )
}

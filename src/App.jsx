import Hero from "./components/Hero"
import FeaturedProducts from "./components/FeaturedProducts"
import MenuCategories from "./components/MenuCategories"
import SixPackBanner from "./components/SixPackBanner"
import CookieBuilder from "./components/CookieBuilder"
import Footer from "./components/Footer"

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

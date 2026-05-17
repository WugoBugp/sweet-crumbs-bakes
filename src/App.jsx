import { useState } from "react"
import Hero from "./Components/Hero"
import FeaturedProducts from "./Components/FeaturedProducts"
import MenuCategories from "./Components/MenuCategories"
import SixPackBanner from "./Components/SixPackBanner"
import CookieBuilder from "./Components/CookieBuilder"
import Footer from "./Components/Footer"

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  const addToCart = (item) => {
    setCartItems((currentItems) => [...currentItems, item])
  }

  return (
    <div className="bg-amber-50 min-h-screen">
      <button
  onClick={() => setCartOpen(true)}
  className="fixed top-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl font-bold"
>
  Cart: {cartItems.length}
</button>

      <Hero />
      <FeaturedProducts addToCart={addToCart} />
      <MenuCategories />
      <SixPackBanner />
      <CookieBuilder addToCart={addToCart} />
      <Footer />
    </div>
  )
}

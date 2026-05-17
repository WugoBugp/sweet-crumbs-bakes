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
const removeFromCart = (indexToRemove) => {
  setCartItems((currentItems) =>
    currentItems.filter((item, index) => index !== indexToRemove)
  )
}
  return (
    <div className="bg-amber-50 min-h-screen">
      <button
  onClick={() => setCartOpen(true)}
  className="fixed top-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl font-bold"
>
  Cart: {cartItems.length}
</button>
{cartOpen && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
    onClick={() => setCartOpen(false)}
  />
)}
  {cartOpen && (
  <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 p-6 overflow-y-auto transform transition-transform duration-300 ease-out translate-x-0">
    <div className="bg-white w-full max-w-md h-full p-6 shadow-2xl overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-black">Your Cart</h2>

        <button
          onClick={() => setCartOpen(false)}
          className="text-3xl font-black"
        >
          ×
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-stone-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border border-orange-100 rounded-2xl p-4"
            >
              <h3 className="font-black text-lg">{item.name}</h3>

              {item.type && (
                <p className="text-stone-600">{item.type}</p>
              )}

              {item.toppings && item.toppings.length > 0 && (
                <p className="text-sm text-stone-500 mt-2">
                  Toppings: {item.toppings.join(", ")}
                </p>
              )}

              {item.frosting && (
                <p className="text-sm text-stone-500">
                  Frosting: {item.frosting}
                </p>
              )}

              <p className="font-black text-orange-600 mt-3">
                ${Number(item.price).toFixed(2)}
              </p>
              <button
  onClick={() => removeFromCart(index)}
  className="mt-3 w-full bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded-xl font-bold transition"
>
  Remove
</button>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>

)}
      <Hero />
      <FeaturedProducts addToCart={addToCart} />
      <MenuCategories />
      <SixPackBanner />
      <CookieBuilder addToCart={addToCart} />
      <Footer />
    </div>
  )
}

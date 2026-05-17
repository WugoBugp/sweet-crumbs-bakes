import { useState, useEffect } from "react"
import CheckoutForm from "./Components/CheckoutForm"
import Hero from "./Components/Hero"
import FeaturedProducts from "./Components/FeaturedProducts"
import MenuCategories from "./Components/MenuCategories"
import SixPackBanner from "./Components/SixPackBanner"
import CookieBuilder from "./Components/CookieBuilder"
import Footer from "./Components/Footer"
import OrderConfirmation from "./Components/OrderConfirmation"

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems")
  return savedCart ? JSON.parse(savedCart) : []
})
  const [cartOpen, setCartOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [order, setOrder] = useState(null)
  useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems))
}, [cartItems])

 const addToCart = (item) => {
  setCartItems((currentItems) => {
    const existingItemIndex = currentItems.findIndex(
      (cartItem) => cartItem.name === item.name
    )

    if (existingItemIndex !== -1) {
      return currentItems.map((cartItem, index) =>
        index === existingItemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    }

    return [...currentItems, { ...item, quantity: 1 }]
  })
}
const removeFromCart = (indexToRemove) => {
  setCartItems((currentItems) =>
    currentItems.filter((item, index) => index !== indexToRemove)
  )
}
const increaseQuantity = (indexToUpdate) => {
  setCartItems((currentItems) =>
    currentItems.map((item, index) =>
      index === indexToUpdate
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  )
}

const decreaseQuantity = (indexToUpdate) => {
  setCartItems((currentItems) =>
    currentItems
      .map((item, index) =>
        index === indexToUpdate
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0)
  )
}
  return (
    <div className="bg-amber-50 min-h-screen">
      {!order && (
  <button
    onClick={() => setCartOpen(true)}
    className="fixed top-6 right-6 z-50 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl font-bold"
  >
    Cart: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
  </button>
)}
{cartOpen && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
    onClick={() => setCartOpen(false)}
  />
)}
  {cartOpen && (
  <div>
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      onClick={() => setCartOpen(false)}
    />

    <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-transform duration-300">
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

              {item.type && <p className="text-stone-600">{item.type}</p>}

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

              <div className="mt-4 flex items-center justify-between">
  <p className="font-black text-orange-600">
    ${(Number(item.price) * item.quantity).toFixed(2)}
  </p>

  <div className="flex items-center gap-3">
    <button
      onClick={() => decreaseQuantity(index)}
      className="bg-stone-200 px-3 py-1 rounded-lg font-bold"
    >
      -
    </button>

    <span className="font-bold">{item.quantity}</span>

    <button
      onClick={() => increaseQuantity(index)}
      className="bg-stone-200 px-3 py-1 rounded-lg font-bold"
    >
      +
    </button>
  </div>
</div>

<button
  onClick={() => removeFromCart(index)}
  className="mt-3 w-full bg-red-100 hover:bg-red-200 text-red-700 py-2 rounded-xl font-bold transition"
>
  Remove
</button>
            </div>
          ))}

         <button
  onClick={() => {
    setShowCheckout(true)
    setCartOpen(false)

    setTimeout(() => {
      document.getElementById("checkout")?.scrollIntoView({
        behavior: "smooth",
      })
    }, 100)
  }}
  className="w-full bg-stone-900 text-white py-3 rounded-2xl font-bold"
>
  Checkout
</button>
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

{showCheckout && (
  <div id="checkout">
    <CheckoutForm
  cartItems={cartItems}
  setCartItems={setCartItems}
  setOrder={setOrder}
  setShowCheckout={setShowCheckout}
/>
  </div>
)}
{order && (
  <OrderConfirmation
    order={order}
    onBackToMenu={() => {
      setOrder(null)
      setShowCheckout(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }}
  />
)}
<Footer />
    </div>
  )
}

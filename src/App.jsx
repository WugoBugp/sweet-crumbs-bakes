import { useState, useEffect } from "react"
import CheckoutForm from "./Components/CheckoutForm"
import Hero from "./Components/Hero"
import FeaturedProducts from "./Components/FeaturedProducts"
import MenuCategories from "./Components/MenuCategories"
import SixPackBanner from "./Components/SixPackBanner"
import CookieBuilder from "./Components/CookieBuilder"
import Footer from "./Components/Footer"
import OrderConfirmation from "./Components/OrderConfirmation"
import Navbar from "./Components/Navbar"

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems")
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [cartOpen, setCartOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)
  const [order, setOrder] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (params.get("success")) {
      setPaymentSuccess(true)

      setTimeout(() => {
        setPaymentSuccess(false)
      }, 5000)

      setCartItems([])
      localStorage.removeItem("cartItems")
      window.history.replaceState({}, "", "/")
    }

    if (params.get("canceled")) {
      alert("Payment canceled. Your cart is still saved.")
      window.history.replaceState({}, "", "/")
    }
  }, [])

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
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />

      {paymentSuccess && (
        <div className="mx-4 sm:mx-auto mt-6 max-w-2xl bg-green-100 border border-green-300 text-green-800 rounded-2xl p-4 text-center font-bold">
          Payment successful! Your order has been received.
        </div>
      )}

     {/* Smooth Cart Overlay + Drawer */}
<div
  className={`fixed inset-0 z-40 transition-all duration-500 ease-out ${
    cartOpen
      ? "opacity-100 pointer-events-auto"
      : "opacity-0 pointer-events-none"
  }`}
>
  <div
    className={`absolute inset-0 bg-black/40 transition-transform duration-500 ease-out ${
      cartOpen ? "translate-x-0" : "translate-x-full"
    }`}
    onClick={() => setCartOpen(false)}
  />

  <div
    className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-transform duration-500 ease-out ${
      cartOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
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
            <div className="text-center py-12">
              <p className="text-5xl mb-4">🍪</p>
              <p className="text-xl font-bold text-stone-900">
                Your cart is empty
              </p>
              <p className="text-stone-500 mt-2">
                Add some cookies to get started.
              </p>
            </div>
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

              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Subtotal</span>
                  <span>
                    $
                    {cartItems
                      .reduce(
                        (sum, item) =>
                          sum + Number(item.price) * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>

                <p className="text-sm text-stone-500 mt-1">
                  Taxes calculated at pickup.
                </p>
              </div>

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
                Continue to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

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

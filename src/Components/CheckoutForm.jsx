// Components/CheckoutForm.jsx

export default function CheckoutForm({ cartItems, setCartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Order submitted! Thank you!")

    setCartItems([])
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 max-w-xl mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          required
          className="w-full border rounded-xl p-3"
        />

        <input
          type="text"
          placeholder="Email or phone number"
          required
          className="w-full border rounded-xl p-3"
        />

        <input
          type="datetime-local"
          required
          className="w-full border rounded-xl p-3"
        />

        <textarea
          placeholder="Special instructions"
          className="w-full border rounded-xl p-3"
        />

        <div className="border-t pt-4">
          <p className="font-bold">Items: {cartItems.length}</p>
          <p className="font-bold">Total: ${total}</p>
        </div>

        <button
          type="submit"
          className="w-full bg-stone-900 text-white py-3 rounded-xl font-bold"
        >
          Submit Order
        </button>
      </form>
    </div>
  )
}
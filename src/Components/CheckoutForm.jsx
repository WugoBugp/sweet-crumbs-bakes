// Components/CheckoutForm.jsx

export default function CheckoutForm({ cartItems, setCartItems, setOrder, setShowCheckout }) {
  const total = cartItems.reduce(
  (sum, item) => sum + Number(item.price) * item.quantity,
  0
)
  const handleSubmit = (e) => {
  e.preventDefault()

  const formData = new FormData(e.target)

  const newOrder = {
    orderNumber: Math.floor(100000 + Math.random() * 900000),
    name: formData.get("name"),
    contact: formData.get("contact"),
    pickupTime: formData.get("pickupTime"),
    instructions: formData.get("instructions"),
    items: cartItems,
   total: cartItems.reduce(
  (sum, item) => sum + Number(item.price) * item.quantity,
  0
),
}
  setOrder(newOrder)
  setCartItems([])
  setShowCheckout(false)
}

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 max-w-xl mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4">Checkout</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
       <input
  type="text"
  name="name"
  placeholder="Your name"
  required
  className="w-full border rounded-xl p-3"
/>

     <input
  type="text"
  name="contact"
  placeholder="Email or phone number"
  required
  className="w-full border rounded-xl p-3"
/>
      <input
  type="datetime-local"
  name="pickupTime"
  required
  className="w-full border rounded-xl p-3"
/>

     <textarea
  name="instructions"
  placeholder="Special instructions (Optional)"
  className="w-full border rounded-xl p-3"
/>

        <div className="border-t pt-4">
          <p className="font-bold">Items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
          <p className="font-bold">Total: ${total.toFixed(2)}</p>
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
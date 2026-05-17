export default function OrderConfirmation({ order, onBackToMenu }) {
  if (!order) return null

  return (
    <div className="max-w-2xl mx-auto my-12 bg-white rounded-3xl shadow-xl p-8 text-center">
      <h2 className="text-4xl font-black text-stone-900 mb-3">
        Order Received!
      </h2>

      <p className="text-stone-600 mb-6">
        Thank you, {order.name}. We’ll have your order ready soon.
      </p>

      <div className="text-left bg-amber-50 rounded-2xl p-5 mb-6">
        <p><strong>Order #:</strong> {order.orderNumber}</p>
        <p><strong>Pickup:</strong> {order.pickupTime}</p>
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      </div>

      <button
        onClick={onBackToMenu}
        className="bg-stone-900 text-white px-6 py-3 rounded-2xl font-bold"
      >
        Back to Menu
      </button>
    </div>
  )
}
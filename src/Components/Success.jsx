export default function Success() {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-stone-900 mb-4">
          Order placed!
        </h1>

        <p className="text-stone-700 mb-6">
          Thank you for your order. We’ll start preparing it soon.
        </p>

        <a
          href="/"
          className="inline-block bg-stone-900 text-white px-6 py-3 rounded-2xl font-bold"
        >
          Back to Menu
        </a>
      </div>
    </div>
  )
}
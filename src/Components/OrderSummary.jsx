export default function OrderSummary({
  selectedBase,
  selectedToppings,
  selectedFrosting,
  totalPrice,
  totalCalories,
}) {
  return (
    <div className="bg-stone-900 text-white rounded-[2rem] p-10 shadow-2xl flex flex-col">
      <h3 className="text-4xl font-black mb-8">
        Order Summary
      </h3>

      <div className="space-y-6 mb-10">
        <div className="bg-stone-800 rounded-2xl p-6">
          <p className="text-stone-400 mb-2">Cookie Base</p>
          <p className="text-2xl font-black">{selectedBase.name}</p>
        </div>

        <div className="bg-stone-800 rounded-2xl p-6">
          <p className="text-stone-400 mb-2">Toppings</p>

          <div className="space-y-2">
            {selectedToppings.length === 0 ? (
              <p className="text-stone-500">No toppings selected</p>
            ) : (
              selectedToppings.map((topping) => (
                <p key={topping.name} className="font-semibold">
                  {topping.name}
                </p>
              ))
            )}
          </div>
        </div>

        <div className="bg-stone-800 rounded-2xl p-6">
          <p className="text-stone-400 mb-2">Frosting</p>

          <p className="font-semibold">
            {selectedFrosting ? selectedFrosting.name : "No frosting selected"}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-orange-600 rounded-2xl p-6">
          <p className="text-orange-100 mb-2">Total Price</p>
          <p className="text-4xl font-black">${totalPrice.toFixed(2)}</p>
        </div>

        <div className="bg-stone-800 rounded-2xl p-6">
          <p className="text-stone-400 mb-2">Calories</p>
          <p className="text-4xl font-black">{totalCalories}</p>
        </div>
      </div>

      <p className="text-sm text-stone-400 mb-6 leading-relaxed">
        Nutrition values are approximate and may vary depending on toppings,
        serving size, and ingredient brands.
      </p>

      <button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-5 rounded-2xl font-black text-xl transition">
        Add Custom Cookie To Order
      </button>
    </div>
  )
}

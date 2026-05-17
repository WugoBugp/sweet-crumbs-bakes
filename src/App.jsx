import { useMemo, useState } from 'react'

export default function BakeSaleWebsite() {
  const cookieBases = [
    { name: 'Chocolate', price: 3 },
    { name: 'Vanilla', price: 3 },
    { name: 'Red Velvet', price: 4 },
    { name: 'Peanut Butter', price: 4 },
    { name: 'Brown Butter', price: 5 },
  ]

  const toppings = [
    { name: 'Milk Chocolate Chips', price: 1 },
    { name: 'White Chocolate Chips', price: 1 },
    { name: 'Oreos', price: 1.25 },
    { name: 'M&Ms', price: 1 },
    
    { name: 'Caramel', price: 1.5 },
    { name: 'Sprinkles', price: 0.5 },
  ]

  const frostings = [
    
    { name: 'Cream Cheese Icing', price: 1.25 },
    { name: 'Peanut Butter Drizzle', price: 1.25 },
    { name: 'Marshmallow Frosting', price: 1 },
  ]

  const sizeOptions = [
    { name: 'Single Cookie', multiplier: 1 },
    { name: '6-Pack', multiplier: 5 },
    { name: 'Dozen', multiplier: 10 },
    { name: 'Mini Cookie Cake', multiplier: 14 },
  ]

  const [selectedBase, setSelectedBase] = useState(cookieBases[0])
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0])
  const [selectedToppings, setSelectedToppings] = useState([])
  const [selectedFrosting, setSelectedFrosting] = useState(null)

  const toggleTopping = (topping) => {
    setSelectedToppings((prev) => {
      const exists = prev.find((item) => item.name === topping.name)

      if (exists) {
        return prev.filter((item) => item.name !== topping.name)
      }

      return [...prev, topping]
    })
  }

  const totalPrice = useMemo(() => {
    const toppingTotal = selectedToppings.reduce(
      (sum, item) => sum + item.price,
      0
    )

    const frostingPrice = selectedFrosting?.price || 0

    const total =
      (selectedBase.price + toppingTotal + frostingPrice) *
      selectedSize.multiplier

    return total.toFixed(2)
  }, [
    selectedBase,
    selectedToppings,
    selectedFrosting,
    selectedSize,
  ])

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-orange-700 mb-4">
              Build Your Own Gourmet Cookies
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Fresh Cookies
              <span className="block text-orange-600">Made Your Way</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-xl">
              Customize gourmet cookies with premium toppings, frostings, and cookie cake options. Built fresh for every order.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#builder"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
              >
                Build Your Cookie
              </a>

              <a
                href="#tracking"
                className="bg-white hover:bg-orange-50 border border-orange-300 px-6 py-3 rounded-2xl font-semibold transition"
              >
                Track Orders
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
              alt="Cookies"
              className="rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Cookie Builder */}
      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10 mb-20">

          {/* Chocolate Chip Thins */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-orange-100">
            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
              alt="Chocolate Chip Cookies"
              className="h-72 w-full object-cover"
            />

            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 mb-4">
                <h3 className="text-3xl font-black">
                  Chocolate Chip Thins
                </h3>

                <span className="text-orange-600 text-2xl font-black">
                  $1+
                </span>
              </div>

              <p className="text-stone-600 mb-6">
                Thin chewy chocolate chip cookies with crispy edges and soft buttery centers.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-sm text-stone-500">Calories</p>
                  <p className="font-bold text-lg">~140</p>
                </div>

                <div className="bg-orange-50 rounded-xl p-4">
                  <p className="text-sm text-stone-500">Protein</p>
                  <p className="font-bold text-lg">2g</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold mb-2">Pricing</p>

                <div className="space-y-2 text-stone-700">
                  <p>1 Cookie — $1</p>
                  <p>3-Pack — $2</p>
                  <p>6-Pack — $4</p>
                  <p>Dozen — $7</p>
                </div>
              </div>

              <div className="text-sm text-stone-500 mb-6">
                Contains: Wheat, Eggs, Milk
              </div>

              <button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold transition">
                Add To Order
              </button>
            </div>
          </div>

          {/* Chocolate Peanut Butter Cookie */}
          <div className="bg-stone-900 text-white rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1200&auto=format&fit=crop"
              alt="Chocolate Peanut Butter Cookie"
              className="h-72 w-full object-cover"
            />

            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-black">
                  Chocolate Peanut Butter Cookie
                </h3>

                <span className="text-orange-400 text-2xl font-black">
                  $5
                </span>
              </div>

              <p className="text-stone-300 mb-6">
                Thick brownie-style chocolate cookies topped with creamy peanut butter icing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-stone-800 rounded-xl p-4">
                  <p className="text-sm text-stone-400">Calories</p>
                  <p className="font-bold text-lg">~420</p>
                </div>

                <div className="bg-stone-800 rounded-xl p-4">
                  <p className="text-sm text-stone-400">Protein</p>
                  <p className="font-bold text-lg">7g</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="font-bold mb-2">Pricing</p>

                <div className="space-y-2 text-stone-300">
                  <p>Single — $5</p>
                  <p>4-Pack — $18</p>
                  <p>6-Pack — $25</p>
                </div>
              </div>

              <div className="text-sm text-stone-400 mb-6">
                Contains: Wheat, Eggs, Milk, Peanuts
              </div>

              <button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold transition">
                Add To Order
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mb-14">
          <h2 className="text-5xl font-black mb-4">
            Explore The Menu
          </h2>

          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            From classic snackable cookies to premium gourmet creations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-orange-100">
            <h3 className="text-3xl font-black mb-4">
              Classic Cookies
            </h3>

            <p className="text-stone-600 mb-6">
              Thin, chewy, snackable cookies baked fresh daily.
            </p>

            <div className="space-y-4">
              {[
                'Chocolate Chip Thins',
                'Sugar Cookies',
                'Oatmeal Cookies',
              ].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center bg-orange-50 rounded-xl p-4"
                >
                  <span className="font-semibold">{item}</span>
                  <span className="text-orange-600 font-bold">
                    $2+
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 text-white rounded-[2rem] p-8 shadow-2xl">
            <h3 className="text-3xl font-black mb-4">
              Gourmet Cookies
            </h3>

            <p className="text-stone-300 mb-6">
              Thick premium bakery-style cookies with loaded toppings.
            </p>

            <div className="space-y-4">
              {[
                'Brown Butter Oreo',
                'Red Velvet White Chip',
                'Peanut Butter Explosion',
              ].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center bg-stone-800 rounded-xl p-4"
                >
                  <span className="font-semibold">{item}</span>
                  <span className="text-orange-400 font-bold">
                    $5+
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-orange-100">
            <h3 className="text-3xl font-black mb-4">
              Cookie Cakes
            </h3>

            <p className="text-stone-600 mb-6">
              Perfect for birthdays, parties, and custom celebrations.
            </p>

            <div className="space-y-4">
              {[
                'Mini Cookie Cakes',
                'Custom Writing',
                'Premium Toppings',
              ].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center bg-orange-50 rounded-xl p-4"
                >
                  <span className="font-semibold">{item}</span>
                  <span className="text-orange-600 font-bold">
                    Available
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-orange-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4">
              Why Cookie Forge?
            </h2>

            <p className="text-lg text-stone-700 max-w-3xl mx-auto">
              Premium ingredients, fresh baking, and fully customizable cookies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'Baked Fresh Daily',
              'Customizable Cookies',
              'Premium Ingredients',
              'Local Delivery',
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-[2rem] p-8 shadow-lg text-center"
              >
                <h3 className="text-2xl font-black">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Build Your Own 6-Pack */}
<section className="max-w-7xl mx-auto px-6 pb-10">
  <div className="bg-stone-900 text-white rounded-[2rem] p-10 shadow-2xl">

    <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">

      <div>
        <p className="uppercase tracking-[0.3em] text-sm text-orange-400 font-semibold mb-4">
          Most Popular
        </p>

        <h2 className="text-5xl font-black mb-4">
          Build Your Own 6-Pack
        </h2>

        <p className="text-stone-300 text-lg max-w-2xl">
          Mix and match gourmet cookies to create your perfect custom box for a discounted bundle price.
        </p>
      </div>

      <div className="text-center">
        <div className="text-6xl font-black text-orange-400 mb-2">
          $20
        </div>

        <p className="text-stone-400">
          Save compared to individual pricing
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Cookie Builder */}
      <section id="builder" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black mb-4">
            Build Your Own Gourmet Cookie
          </h2>

          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Create custom gourmet cookies exactly how you want them.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 shadow-xl border border-orange-100">
            {/* Base */}
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-5">
                Step 1 — Choose Cookie Base
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {cookieBases.map((base) => (
                  <button
                    key={base.name}
                    onClick={() => setSelectedBase(base)}
                    className={`p-5 rounded-2xl border-2 text-left transition ${
                      selectedBase.name === base.name
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-stone-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{base.name}</span>
                      <span className="text-orange-600 font-semibold">
                        ${base.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Toppings */}
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-5">
                Step 2 — Pick Toppings
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {toppings.map((topping) => {
                  const active = selectedToppings.find(
                    (item) => item.name === topping.name
                  )

                  return (
                    <button
                      key={topping.name}
                      onClick={() => toggleTopping(topping)}
                      className={`p-5 rounded-2xl border-2 text-left transition ${
                        active
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-stone-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{topping.name}</span>
                        <span className="text-orange-600 font-semibold">
                          +${topping.price}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Frosting */}
            <div className="mb-10">
              <h3 className="text-3xl font-black mb-5">
                Step 3 — Frosting / Drizzle
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {frostings.map((frosting) => (
                  <button
                    key={frosting.name}
                    onClick={() => setSelectedFrosting(frosting)}
                    className={`p-5 rounded-2xl border-2 text-left transition ${
                      selectedFrosting?.name === frosting.name
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-stone-200 hover:border-orange-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold">{frosting.name}</span>
                      <span className="text-orange-600 font-semibold">
                        +${frosting.price}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-3xl font-black mb-5">
                Step 4 — Choose Size
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {sizeOptions.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size)}
                    className={`p-5 rounded-2xl border-2 text-left transition ${
                      selectedSize.name === size.name
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-stone-200 hover:border-orange-300'
                    }`}
                  >
                    <span className="font-bold text-lg">{size.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-stone-900 text-white rounded-[2rem] p-8 shadow-2xl h-fit sticky top-10">
            <h3 className="text-4xl font-black mb-8">
              Your Cookie
            </h3>

            <div className="space-y-5 mb-10">
              <div>
                <p className="text-stone-400 mb-1">Base</p>
                <p className="text-xl font-bold">{selectedBase.name}</p>
              </div>

              <div>
                <p className="text-stone-400 mb-1">Toppings</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedToppings.length > 0 ? (
                    selectedToppings.map((item) => (
                      <span
                        key={item.name}
                        className="bg-orange-600 px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {item.name}
                      </span>
                    ))
                  ) : (
                    <p className="text-stone-300">No toppings selected</p>
                  )}
                </div>
              </div>

              <div>
                <p className="text-stone-400 mb-1">Frosting</p>
                <p className="text-xl font-bold">
                  {selectedFrosting?.name || 'None'}
                </p>
              </div>

              <div>
                <p className="text-stone-400 mb-1">Size</p>
                <p className="text-xl font-bold">{selectedSize.name}</p>
              </div>
            </div>

            <div className="border-t border-stone-700 pt-6 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">Total</span>
                <span className="text-4xl font-black text-orange-400">
                  ${totalPrice}
                </span>
              </div>
            </div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 py-4 rounded-2xl text-lg font-bold transition mb-6">
              Add To Order
            </button>

            <div className="bg-stone-800 rounded-2xl p-5 border border-stone-700">
              <h4 className="text-xl font-black mb-4 text-orange-400">
                Nutrition & Allergens
              </h4>

              <div className="space-y-2 text-sm text-stone-300">
                <p>Calories: ~140–450 depending on selections</p>
                <p>Protein: ~2g–6g</p>
                <p>Sugar: ~11g–28g</p>
                <p>Contains: Wheat, Milk, Eggs</p>
                <p>May contain: Peanuts / Tree Nuts</p>
                <p className="text-stone-400 mt-4">
                  Approximate nutritional values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">
              Cookie Forge
            </h3>
            <p>Custom gourmet cookies built fresh to order.</p>
          </div>

          <div className="text-sm text-stone-400">
            © 2026 Cookie Forge
          </div>
        </div>
      </footer>
    </div>
  )
}

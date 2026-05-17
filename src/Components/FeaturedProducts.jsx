export default function FeaturedProducts() {
  return (
    <section
      id="menu"
      className="py-24 px-6 bg-gradient-to-b from-amber-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-stone-900 mb-4">
            Featured Cookies
          </h2>

          <p className="text-xl text-stone-600">
            Fresh homemade cookies ranging from snackable classics
            to premium gourmet creations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Chocolate Chip Thins */}
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">

            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
              alt="Chocolate Chip Cookies"
              className="h-72 w-full object-cover"
            />

            <div className="p-8 flex flex-col flex-1">

              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-4xl font-black text-stone-900">
                  Chocolate Chip Thins
                </h3>

                <span className="text-orange-600 text-3xl font-black whitespace-nowrap">
                  $1+
                </span>
              </div>

              <p className="text-stone-700 text-lg mb-8">
                Thin chewy chocolate chip cookies with crispy buttery edges
                and soft centers.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">

                <div className="bg-orange-50 rounded-2xl p-4">
                  <p className="text-sm text-stone-500 mb-1">
                    Calories
                  </p>

                  <p className="text-2xl font-black">
                    ~140
                  </p>
                </div>

                <div className="bg-orange-50 rounded-2xl p-4">
                  <p className="text-sm text-stone-500 mb-1">
                    Protein
                  </p>

                  <p className="text-2xl font-black">
                    2g
                  </p>
                </div>

              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-black mb-4">
                  Pricing
                </h4>

                <div className="space-y-2 text-lg text-stone-700">
                  <p>1 Cookie — $1</p>
                  <p>3-Pack — $2</p>
                  <p>6-Pack — $4</p>
                  <p>Dozen — $7</p>
                </div>
              </div>

              <div className="text-sm text-stone-500 mb-8">
                Contains: Wheat, Eggs, Milk
              </div>

              <button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold text-lg transition">
                Add To Order
              </button>

            </div>
          </div>

          {/* Chocolate Peanut Butter Cookie */}
          <div className="bg-stone-900 text-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col">

            <img
              src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1200&auto=format&fit=crop"
              alt="Chocolate Peanut Butter Cookie"
              className="h-72 w-full object-cover"
            />

            <div className="p-8 flex flex-col flex-1">

              <div className="flex justify-between items-start mb-4 gap-4">

                <h3 className="text-4xl font-black leading-tight max-w-[320px]">
                  Chocolate Peanut Butter Cookie
                </h3>

                <span className="text-orange-400 text-3xl font-black whitespace-nowrap">
                  $5
                </span>

              </div>

              <p className="text-stone-300 text-lg mb-8">
                Thick brownie-style chocolate cookies topped with creamy
                peanut butter icing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">

                <div className="bg-stone-800 rounded-2xl p-4">
                  <p className="text-sm text-stone-400 mb-1">
                    Calories
                  </p>

                  <p className="text-2xl font-black">
                    ~420
                  </p>
                </div>

                <div className="bg-stone-800 rounded-2xl p-4">
                  <p className="text-sm text-stone-400 mb-1">
                    Protein
                  </p>

                  <p className="text-2xl font-black">
                    7g
                  </p>
                </div>

              </div>

              <div className="mb-8">
                <h4 className="text-2xl font-black mb-4">
                  Pricing
                </h4>

                <div className="space-y-2 text-lg text-stone-300">
                  <p>Single — $5</p>
                  <p>4-Pack — $18</p>
                  <p>6-Pack — $25</p>
                </div>
              </div>

              <div className="text-sm text-stone-500 mb-8">
                Contains: Wheat, Eggs, Milk, Peanuts
              </div>

              <button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold text-lg transition">
                Add To Order
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-200 via-orange-100 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-orange-700 mb-4">
            Homemade Bake Sale
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-stone-900">
            Fresh Cookies
            <span className="block text-orange-600">
              Made Your Way
            </span>
          </h1>

          <p className="text-lg text-stone-700 mb-8 max-w-xl leading-relaxed">
            Fresh homemade cookies baked to order with customizable toppings,
            gourmet flavors, cookie cakes, and snackable classics.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold transition"
            >
              View Menu
            </a>

            <a
              href="#builder"
              className="border-2 border-orange-300 hover:bg-orange-100 px-8 py-4 rounded-2xl font-bold transition"
            >
              Build Your Own Gourmet Cookie
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
            alt="Chocolate chip cookies"
            className="rounded-[2rem] shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}
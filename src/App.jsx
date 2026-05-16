export default function BakeSaleWebsite() {
  const products = [
    {
      name: "Chocolate Chip Cookies",
      price: "$12 / dozen",
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop",
      description: "Soft baked cookies with melted chocolate chips.",
    },
    {
      name: "Sugar Cookies",
      price: "$10 / dozen",
      image:
        "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop",
      description: "Classic homemade sugar cookies with icing.",
    },
    {
      name: "Mini Cookie Cakes",
      price: "$18 each",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1200&auto=format&fit=crop",
      description: "Soft mini cookie cakes with optional custom icing and toppings.",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-200 via-orange-100 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-orange-700 mb-4">
              Homemade Bake Sale
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Fresh Cookies
              <span className="block text-orange-600">Made To Order</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-700 mb-8 max-w-xl">
              Order homemade cookies, brownies, and custom baked treats for school events, parties, or just because you want something sweet.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition"
              >
                View Menu
              </a>

              <a
                href="#order"
                className="bg-white hover:bg-orange-50 border border-orange-300 px-6 py-3 rounded-2xl font-semibold transition"
              >
                Place Order
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop"
              alt="Chocolate chip cookies"
              className="rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Cookie Menu
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Pick from homemade favorites or request a custom dessert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-1 transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <span className="text-orange-600 font-bold">
                    {item.price}
                  </span>
                </div>

                <p className="text-stone-600 mb-6">{item.description}</p>

                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition">
                  Add To Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Orders */}
      <section className="bg-orange-100 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Custom Bake Requests
          </h2>

          <p className="text-lg text-stone-700 max-w-3xl mx-auto leading-relaxed">
            Want something different? You can request cupcakes, mini cookie cakes with custom icing, muffins, or any other homemade dessert idea.
          </p>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[2rem] shadow-xl border border-orange-100 p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-black mb-4">Place An Order</h2>
            <p className="text-stone-600 text-lg">
              Fill out the form and I’ll contact you to confirm your order.
            </p>
          </div>

          <form className="grid gap-6">
            <div>
              <label className="block font-semibold mb-2">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email or Phone</label>
              <input
                type="text"
                placeholder="How should I contact you?"
                className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">What Would You Like To Order?</label>
              <textarea
                rows="5"
                placeholder="Example: 2 dozen chocolate chip cookies"
                className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl text-lg font-bold transition"
            >
              Submit Order Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h3 className="text-2xl font-black text-white mb-2">
              Sweet Crumbs Bake Sale
            </h3>
            <p>Fresh homemade desserts baked with care.</p>
          </div>

          <div className="text-sm text-stone-400">
            © 2026 Sweet Crumbs Bake Sale
          </div>
        </div>
      </footer>
    </div>
  );
}

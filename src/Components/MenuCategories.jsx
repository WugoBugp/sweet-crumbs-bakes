export default function MenuCategories() {
  return (
    <section className="py-24 px-6 bg-amber-50">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-6xl font-black text-stone-900 mb-4">
            Explore The Menu
          </h2>

          <p className="text-xl text-stone-600">
            From snackable classics to premium gourmet creations.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Classic Cookies */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-orange-100 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-6">
              🍪
            </div>

            <h3 className="text-3xl font-black mb-4 text-stone-900">
              Classic Cookies
            </h3>

            <p className="text-stone-600 mb-6 leading-relaxed">
              Thin chewy cookies perfect for everyday snacking,
              parties, school events, and bulk orders.
            </p>

            <div className="space-y-2 text-stone-700 text-lg mb-8">
              <p>• Chocolate Chip Thins</p>
              <p>• Sugar Cookies</p>
              <p>• Oatmeal Cookies</p>
              <p>• M&M Cookies</p>
            </div>

            <div className="font-black text-orange-600 text-xl">
              Starting at $1
            </div>

          </div>

          {/* Gourmet Cookies */}
          <div className="bg-stone-900 text-white rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-6">
              🍫
            </div>

            <h3 className="text-3xl font-black mb-4">
              Gourmet Cookies
            </h3>

            <p className="text-stone-300 mb-6 leading-relaxed">
              Thick premium bakery-style cookies loaded with rich flavors,
              toppings, icing, and gourmet textures.
            </p>

            <div className="space-y-2 text-stone-300 text-lg mb-8">
              <p>• Chocolate Peanut Butter</p>
              <p>• Brown Butter Oreo</p>
              <p>• Red Velvet White Chip</p>
              <p>• Cookies & Cream</p>
            </div>

            <div className="font-black text-orange-400 text-xl">
              Starting at $5
            </div>

          </div>

          {/* Cookie Cakes */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-orange-100 hover:-translate-y-2 transition-all duration-300">

            <div className="text-5xl mb-6">
              🎂
            </div>

            <h3 className="text-3xl font-black mb-4 text-stone-900">
              Cookie Cakes
            </h3>

            <p className="text-stone-600 mb-6 leading-relaxed">
              Custom cookie cakes for birthdays, parties,
              celebrations, and events.
            </p>

            <div className="space-y-2 text-stone-700 text-lg mb-8">
              <p>• Chocolate Chip</p>
              <p>• Brownie Cookie Cake</p>
              <p>• Custom Messages</p>
              <p>• Icing Options</p>
            </div>

            <div className="font-black text-orange-600 text-xl">
              Starting at $18
            </div>

          </div>

          {/* Build Your Own */}
          <div
            id="builder"
            className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-[2rem] p-8 shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              ⚡
            </div>

            <h3 className="text-3xl font-black mb-4">
              Build Your Own Gourmet Cookie
            </h3>

            <p className="text-orange-100 mb-6 leading-relaxed">
              Choose your cookie base, toppings, frosting,
              quantity, and premium add-ons.
            </p>

            <div className="space-y-2 text-lg mb-8">
              <p>• Cookie Bases</p>
              <p>• Premium Toppings</p>
              <p>• Frostings & Drizzles</p>
              <p>• Cookie Cakes</p>
            </div>

            <div className="font-black text-2xl">
              Fully Customizable
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
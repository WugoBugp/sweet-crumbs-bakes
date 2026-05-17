export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black text-white mb-4">
            Cookie Forge
          </h2>

          <p className="text-stone-400 leading-relaxed mb-6">
            Homemade gourmet cookies baked fresh for every order.
            Built for cookie lovers, parties, gifts, and late-night cravings.
          </p>

          <div className="flex gap-4">
            <div className="bg-stone-800 px-4 py-2 rounded-xl text-sm">
              Fresh Daily
            </div>

            <div className="bg-stone-800 px-4 py-2 rounded-xl text-sm">
              Texas Cottage Food
            </div>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-white font-black text-xl mb-5">
            Menu
          </h3>

          <div className="space-y-3">
            <p>Chocolate Chip Thins</p>
            <p>Chocolate Peanut Butter Cookies</p>
            <p>Build Your Own Gourmet Cookie</p>
            <p>Cookie Cakes</p>
            <p>Party Packs</p>
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="text-white font-black text-xl mb-5">
            Information
          </h3>

          <div className="space-y-3">
            <p>Nutrition Information</p>
            <p>Allergen Warnings</p>
            <p>Pickup & Delivery</p>
            <p>Fresh Baked Policy</p>
            <p>Custom Orders</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-black text-xl mb-5">
            Contact
          </h3>

          <div className="space-y-4">
            <p>
              Broaddus, Texas
            </p>

            <p>
              Orders through website & Instagram
            </p>

            <p className="text-orange-400 font-bold">
              Fresh batches weekly
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 mt-16 pt-8 text-center text-stone-500 text-sm">
        © 2026 Cookie Forge — Homemade cookies baked under Texas Cottage Food Law.
      </div>
    </footer>
  )
}
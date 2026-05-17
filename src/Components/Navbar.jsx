export default function Navbar({ cartCount, onCartClick }) {
  return (
    <nav className="sticky top-0 z-40 bg-amber-50/80 backdrop-blur-md border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-black text-stone-900">
          Cookie Forge
        </a>

        <div className="hidden sm:flex items-center gap-6 font-bold text-stone-700">
          <a href="#menu" className="hover:text-orange-600 transition">
            Menu
          </a>
          <a href="#builder" className="hover:text-orange-600 transition">
            Build Cookie
          </a>
        </div>

        <button
          onClick={onCartClick}
          className="bg-stone-900 text-white px-4 py-2 rounded-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition"
        >
          Cart: {cartCount}
        </button>
      </div>
    </nav>
  )
}
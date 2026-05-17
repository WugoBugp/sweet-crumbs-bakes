export default function SixPackBanner() {
  return (
    <section className="py-20 px-6 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-stone-900 text-white rounded-[2rem] p-10 md:p-14 shadow-2xl overflow-hidden relative">
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-orange-400 font-semibold mb-4">
                Best Value
              </p>

              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                Build Your Own
                <span className="block text-orange-400">
                  Gourmet 6-Pack
                </span>
              </h2>

              <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mb-8">
                Mix and match gourmet cookies into a custom box. Perfect for
                sharing, trying different flavors, or getting a better price
                per cookie.
              </p>

              <a
  href="#custom-builder"
  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 ease-out hover:scale-105 active:scale-95"
>
  Start Building
</a>
            </div>

            <div className="bg-stone-800 rounded-[2rem] p-8 border border-stone-700">
              <div className="text-sm uppercase tracking-[0.25em] text-orange-400 font-semibold mb-3">
                Bundle Price
              </div>

              <div className="text-7xl font-black text-white mb-4">
                $20
              </div>

              <p className="text-stone-300 mb-6">
                6 gourmet cookies minimum. Cheaper than buying singles.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-stone-900 rounded-xl p-4">
                  <p className="text-stone-400">Single Price</p>
                  <p className="text-xl font-black">$5 each</p>
                </div>

                <div className="bg-stone-900 rounded-xl p-4">
                  <p className="text-stone-400">6-Pack Deal</p>
                  <p className="text-xl font-black text-orange-400">$20</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-16 -bottom-16 w-56 h-56 rounded-full bg-orange-600 opacity-20" />
          <div className="absolute -right-4 -top-20 w-32 h-32 rounded-full bg-amber-300 opacity-20" />
        </div>
      </div>
    </section>
  )
}

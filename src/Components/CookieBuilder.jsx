import { useState } from "react"
import OrderSummary from "./OrderSummary"

export default function CookieBuilder() {
  const cookieBases = [
    {
      name: "Chocolate",
      price: 3,
      calories: 260,
    },
    {
      name: "Vanilla",
      price: 3,
      calories: 220,
    },
    {
      name: "Red Velvet",
      price: 4,
      calories: 310,
    },
    {
      name: "Brown Butter",
      price: 5,
      calories: 340,
    },
  ]
const productTypes = [
  {
    name: "Regular Cookie",
    priceMultiplier: 1,
    calorieMultiplier: 1,
  },
  {
    name: "Gourmet Cookie",
    priceMultiplier: 1.5,
    calorieMultiplier: 1.4,
  },
  {
    name: "Mini Cookie Cake",
    priceMultiplier: 4,
    calorieMultiplier: 3.5,
  },
  {
    name: "Medium Cookie Cake",
    priceMultiplier: 7,
    calorieMultiplier: 6,
  },
]
  const toppings = [
    {
      name: "Milk Chocolate Chips",
      price: 1,
      calories: 80,
    },
    {
      name: "White Chocolate Chips",
      price: 1,
      calories: 90,
    },
    {
      name: "Oreos",
      price: 1.25,
      calories: 110,
    },
    {
      name: "M&Ms",
      price: 1,
      calories: 100,
    },
    {
      name: "Caramel",
      price: 1.5,
      calories: 120,
    },
    {
      name: "Sprinkles",
      price: 0.5,
      calories: 40,
    },
  ]

  const frostings = [
    {
      name: "Cream Cheese Icing",
      price: 1.25,
      calories: 90,
    },
    {
      name: "Peanut Butter Drizzle",
      price: 1.25,
      calories: 130,
    },
    {
      name: "Marshmallow Frosting",
      price: 1,
      calories: 100,
    },
  ]

  const [selectedBase, setSelectedBase] = useState(cookieBases[0])
const [selectedToppings, setSelectedToppings] = useState([])
const [selectedFrosting, setSelectedFrosting] = useState(null)

const [selectedProductType, setSelectedProductType] =
  useState(productTypes[1])
  const toggleTopping = (topping) => {
  const alreadySelected = selectedToppings.some(
    (item) => item.name === topping.name
  )

  if (alreadySelected) {
    setSelectedToppings(
      selectedToppings.filter((item) => item.name !== topping.name)
    )
  } else {
    setSelectedToppings([...selectedToppings, topping])
  }
}

 const basePrice =
  selectedBase.price +
  selectedToppings.reduce((sum, topping) => sum + topping.price, 0) +
  (selectedFrosting ? selectedFrosting.price : 0)

const totalPrice = basePrice * selectedProductType.priceMultiplier

const baseCalories =
  selectedBase.calories +
  selectedToppings.reduce((sum, topping) => sum + topping.calories, 0) +
  (selectedFrosting ? selectedFrosting.calories : 0)

const totalCalories = Math.round(
  baseCalories * selectedProductType.calorieMultiplier
)
  return (
    <section
      id="builder"
      className="py-24 px-6 bg-gradient-to-b from-orange-50 to-amber-100"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-6xl font-black text-stone-900 mb-4">
            Build Your Own Gourmet Cookie
          </h2>

          <p className="text-xl text-stone-600">
            Customize your perfect cookie with premium toppings,
            frosting, and bakery-style flavors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-white rounded-[2rem] p-10 shadow-2xl">

            {/* Cookie Base */}
            <div className="mb-10">
                <div className="mb-12">
  <h3 className="text-3xl font-black mb-6">
    Choose Product Type
  </h3>

  <div className="grid md:grid-cols-2 gap-4">
    {productTypes.map((type) => (
      <button
        key={type.name}
        onClick={() => setSelectedProductType(type)}
        className={`p-5 rounded-2xl border-2 text-left transition ${
          selectedProductType.name === type.name
            ? "border-orange-600 bg-orange-100"
            : "border-stone-200 hover:border-orange-300"
        }`}
      >
        <p className="font-black text-xl mb-1">
          {type.name}
        </p>

        <p className="text-stone-600">
          {type.name.includes("Cake")
            ? "Large shareable dessert"
            : "Single serving option"}
        </p>
      </button>
    ))}
  </div>
</div>
              <h3 className="text-3xl font-black mb-6">
                Choose A Cookie Base
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {cookieBases.map((base) => (
                  <button
                    key={base.name}
                    onClick={() => setSelectedBase(base)}
                    className={`p-5 rounded-2xl border-2 text-left transition ${
                      selectedBase.name === base.name
                        ? "border-orange-600 bg-orange-100"
                        : "border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    <p className="font-black text-xl mb-1">
                      {base.name}
                    </p>

                    <p className="text-stone-600">
                      ${base.price}
                    </p>
                  </button>
                ))}

              </div>
            </div>

            {/* Toppings */}
            <div className="mb-10">

              <h3 className="text-3xl font-black mb-6">
                Premium Toppings
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {toppings.map((topping) => (
                  <button
                    key={topping.name}
                    onClick={() => toggleTopping(topping)}
                    className={`p-5 rounded-2xl border-2 text-left transition ${
                      selectedToppings.some(
  (item) => item.name === topping.name
)
                        ? "border-orange-600 bg-orange-100"
                        : "border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    <p className="font-black text-lg mb-1">
                      {topping.name}
                    </p>

                    <p className="text-stone-600">
                      +${topping.price}
                    </p>
                  </button>
                ))}

              </div>
            </div>

            {/* Frosting */}
            <div>

              <h3 className="text-3xl font-black mb-6">
                Frosting
              </h3>

              <div className="grid md:grid-cols-2 gap-4">

                {frostings.map((frosting) => (
                  <button
                    key={frosting.name}
                    onClick={() => setSelectedFrosting(frosting)}
                    className={`p-5 rounded-2xl border-2 text-left transition ${
                      selectedFrosting?.name === frosting.name
                        ? "border-orange-600 bg-orange-100"
                        : "border-stone-200 hover:border-orange-300"
                    }`}
                  >
                    <p className="font-black text-lg mb-1">
                      {frosting.name}
                    </p>

                    <p className="text-stone-600">
                      +${frosting.price}
                    </p>
                  </button>
                ))}

              </div>
            </div>

          </div>

          <OrderSummary
  selectedBase={selectedBase}
  selectedProductType={selectedProductType}
  selectedToppings={selectedToppings}
  selectedFrosting={selectedFrosting}
  totalPrice={totalPrice}
  totalCalories={totalCalories}
/>
      </div>
    </div>
  </section>
)
}

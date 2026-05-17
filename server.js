import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import Stripe from "stripe"

dotenv.config()

const app = express()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

app.use(cors())
app.use(express.json())

app.post("/create-checkout-session", async (req, res) => {
  try {
    const { cartItems } = req.body

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(Number(item.price) * 100),
        },
        quantity: item.quantity,
      })),
      success_url: "https://cookieforge.org/success",
      cancel_url: "https://cookieforge.org",
    })

    res.json({ url: session.url })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(4242, () => {
  console.log("Server running on http://localhost:4242")
})
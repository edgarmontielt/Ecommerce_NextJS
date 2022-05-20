import { doc, getDoc } from 'firebase/firestore';
import { database } from '../../../../config/firebase';

const stripe = require('stripe')(process.env.STRIPE_SK)

export default async function createCheckoutSession(req, res) {
    const host = req.headers.host
    const id = req.headers.referer.split('/')[4]
    const document = doc(database, "products", id)
    const productDoc = await getDoc(document)
    const product = productDoc.data()

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: product.priceID,
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `http://${host}/?success=true`,
            cancel_url: `http://${host}/?success=false`
        })

        return res.json({
            url: session.url
        })
    } catch (error) {
        return res.status(error.statusCode || 500).json(error.message)
    }
}
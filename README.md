# Boutique Knit Bags

Open `index.html` in a browser to view the shop.

## Stripe payment

The site has a Netlify Function for Stripe Checkout:

`netlify/functions/create-checkout-session.js`

To accept real Apple Pay and card payments:

1. Deploy the site through Netlify with build support, not only static file preview.
2. In Netlify, add environment variable `STRIPE_SECRET_KEY`.
3. Use your Stripe secret key. Do not put it in `app.js`.
4. Redeploy the site.
5. In Stripe, enable payment methods and register your live domain for Apple Pay.
6. Test first with Stripe test mode.

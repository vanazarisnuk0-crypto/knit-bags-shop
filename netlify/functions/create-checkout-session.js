const Stripe = require("stripe");

const products = {
  "sage-crossbody": {
    name: "Sage Crossbody",
    description: "Handmade knitted crossbody bag",
    unit_amount: 7200,
  },
  "cream-baguette": {
    name: "Cream Baguette",
    description: "Handmade knitted baguette bag",
    unit_amount: 8600,
  },
  "berry-mini": {
    name: "Berry Mini",
    description: "Handmade knitted mini bag",
    unit_amount: 5400,
  },
  "cocoa-shopper": {
    name: "Cocoa Shopper",
    description: "Handmade knitted shopper bag",
    unit_amount: 9400,
  },
  "black-pearl": {
    name: "Black Pearl",
    description: "Handmade knitted evening bag",
    unit_amount: 7900,
  },
  "milk-cloud": {
    name: "Milk Cloud",
    description: "Handmade knitted mini bag",
    unit_amount: 5800,
  },
};

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing STRIPE_SECRET_KEY" }),
    };
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    const body = JSON.parse(event.body || "{}");
    const items = Array.isArray(body.items) ? body.items : [];

    const lineItems = items
      .map((item) => {
        const product = products[item.id];
        const quantity = Number(item.quantity);

        if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
          return null;
        }

        return {
          quantity,
          price_data: {
            currency: "eur",
            unit_amount: product.unit_amount,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        };
      })
      .filter(Boolean);

    if (!lineItems.length) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Cart is empty" }),
      };
    }

    const siteUrl = process.env.URL || process.env.DEPLOY_PRIME_URL || "http://localhost:8888";
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${siteUrl}/success.html`,
      cancel_url: `${siteUrl}/cancel.html`,
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["DK", "SE", "NO", "DE", "PL", "UA", "US"],
      },
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};


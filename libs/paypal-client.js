import paypal from "@paypal/checkout-server-sdk";

const env = process.env.NODE_ENV;
const clientID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const enviroment =
  env === "development"
    ? new paypal.core.SandboxEnvironment(clientID, clientSecret)
    : new paypal.core.LiveEnvironment(clientID, clientSecret);


const client =  new paypal.core.PayPalHttpClient(enviroment)


export default client
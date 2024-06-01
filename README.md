# Vue.js Stripe Payment Integration

This project demonstrates how to integrate the Stripe payment gateway into a Vue.js application to process one-time donations. The application features a simple donation form that collects the user's name, email, phone number, and donation amount. It utilizes Stripe's API to handle the payment processing securely.

## Technologies Used

- **Frontend:** Vue.js, Vite
- **Backend:** Node.js, Express
- **Payment Gateway:** Stripe

## Blog Post

For a detailed tutorial on setting up this project, please refer to [this blog post](https://rabinson.hashnode.dev/seamless-payments-integrating-stripe-with-vuejs-and-nodejs) where I explain each step in detail.

## Setup Instructions

1. **Clone the Repository:**

   ```
   git clone https://github.com/rabinthapa18/stripe_vue_node.git
   ```

2. **Install Dependencies:**

   ```
   # Install frontend dependencies
   cd frontend
   npm install
   ```

   ```
   # Install backend dependencies
   cd backend
   npm install

   ```

3. **Set Up Stripe:**

- Create a Stripe account at [Stripe](https://dashboard.stripe.com/register).
- Obtain your Stripe API keys (public and secret) from the dashboard.

4. **Configure Environment Variables:**

- Create a `.env` file in the `backend` directory.
- Create a `config.development.js` file in the `frontend` directory.

5. **Start the Backend Server:**

   ```

   cd backend
   node index.js

   ```

6. **Start the Frontend Development Server:**

   ```

   cd frontend
   npm run dev

   ```

7. **Access the Application:**
   Open your browser and navigate to `http://localhost:5001`.

## Usage

1. Fill in the donation form with your details and the desired donation amount.
2. Click the "Submit" button to initiate the payment process.
3. Complete the payment using the Stripe test card number `4242 4242 4242 4242` with any valid future date and CVC.
4. You will see a success message if the payment is successful or an error message if there is an issue with the payment.

## Additional Notes

- This project is set up for testing purposes and uses Stripe's test environment. Replace the test keys with your live keys when deploying to production.
- Customize the form and styling as per your requirements.
- For more information, refer to the [Stripe Documentation](https://stripe.com/docs).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

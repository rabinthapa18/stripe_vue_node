<template>
  <div :class="$style['form-container']">
    <form @submit.prevent="handleSubmit">
      <h2>Make a Donation</h2>
      <div :class="$style['form-group']">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div :class="$style['form-group']">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div :class="$style['form-group']">
        <label for="phone">Phone Number:</label>
        <input type="text" id="phone" v-model="form.phone" required />
      </div>
      <div :class="$style['form-group']">
        <label for="donation">Donation:</label>
        <input type="number" id="donation" v-model="form.donation" required />
      </div>
      <button :class="$style['submit-button']" type="submit">Submit</button>
    </form>
    <div v-if="message" :class="$style['message']">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import { loadStripe } from "@stripe/stripe-js";
import styles from "./DonationForm.module.css";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        donation: 0,
      },
      message: "",
      stripe: null,
    };
  },
  async mounted() {
    this.stripe = await loadStripe(import.meta.env.VUE_APP_STRIPE);
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await fetch(
          "http://localhost:3000/create-checkout-session",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ donation: this.form.donation }),
          }
        );
        const session = await response.json();
        const { error } = await this.stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (error) {
          this.message = error.message;
        }
      } catch (error) {
        this.message = error.message;
      }
    },
  },
  computed: {
    $style() {
      return styles;
    },
  },
};
</script>

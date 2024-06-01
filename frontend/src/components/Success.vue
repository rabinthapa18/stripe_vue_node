<template>
  <div :class="$style['success-container']">
    <h1>Payment Successful!</h1>
    <p>Thank you for your donation.</p>
  </div>
</template>

<script>
import styles from "./Success.module.css";

export default {
  name: "Success",
  computed: {
    $style() {
      return styles;
    },
  },
};
</script>

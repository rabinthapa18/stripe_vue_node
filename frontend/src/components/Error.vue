<template>
  <div :class="$style['error-container']">
    <h1>Payment Error</h1>
    <p>There was an issue with your payment. Please try again.</p>
  </div>
</template>

<script>
import styles from "./Error.module.css";

export default {
  name: "Error",
  computed: {
    $style() {
      return styles;
    },
  },
};
</script>

<template>
  <div id="app" :class="$style['app']">
    <router-view />
  </div>
</template>

<script>
import styles from "./App.module.css";

export default {
  name: "App",
  computed: {
    $style() {
      return styles;
    },
  },
};
</script>

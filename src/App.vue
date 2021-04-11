<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    const dark = localStorage.getItem("dark");
    this.$vuetify.theme.dark = dark === "true";
  }
};
</script>

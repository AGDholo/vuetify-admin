<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <h-navigation />

    <v-main>
      <v-container>
        <router-view :key="key" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "h-layout",
  components: {
    "h-navigation": () => import("../components/layouts/h-navigation")
  },
  computed: {
    key() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
.download-btn {
  box-shadow: 1px 1px 18px rgb(255, 152, 0);
}
</style>

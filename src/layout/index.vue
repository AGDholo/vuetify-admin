<template>
  <v-app id="vadmin">
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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HNotification from "@/components/base/h-notification/index.vue";

@Component({
  name: "HLayout",
  components: {
    HNotification,
    HNavigation: () => import("@/components/layouts/h-navigation.vue")
  }
})
export default class HLayout extends Vue {
  private get key() {
    return this.$route.path;
  }
}
</script>

<style lang="scss" scoped>
.download-btn {
  box-shadow: 1px 1px 18px rgb(255, 152, 0);
}
</style>

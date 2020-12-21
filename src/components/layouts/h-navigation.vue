<template>
  <div>
    <v-app-bar app color="h-bg" fixed>
      <v-app-bar-nav-icon @click="toggleDrawer()" />

      <v-spacer />

      <h-search
        url="https://cat-fact.herokuapp.com/facts/random?amount=10&animal_type="
      />

      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-menu offset-y left transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="mr-1" v-bind="attrs" v-on="on">
            <v-badge
              bordered
              color=" blue"
              :content="notifications.length"
              offset-x="10"
              offset-y="8"
            >
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <h-notification :data="notifications" />
      </v-menu>

      <v-menu offset-y left transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-badge
              dot
              bordered
              color="green"
              content="6"
              offset-x="6"
              offset-y="6"
            >
              <v-avatar size="24" color="grey"> </v-avatar>
            </v-badge>
          </v-btn>
        </template>

        <v-list min-width="48" width="140" nav dense>
          <template v-for="(item, index) in accounts">
            <v-divider v-if="item.divider" :key="index" />

            <v-list-item link :key="item.title">
              <v-list-item-icon>
                <v-icon small size="16">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer.display" app fixed class="elevation-1">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-avatar color="grey" size="64" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              AGDholo
            </v-list-item-title>
            <v-list-item-subtitle>agdholo@outlook.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group
          color="primary"
          v-for="item in drawer.data"
          :key="item.path"
        >
          <v-subheader v-if="item.subtitle" class="pa-1 mt-2 overline">
            {{ item.subtitle }}
          </v-subheader>

          <v-list-item
            v-if="item.children.length <= 1"
            :to="item.children[0].path"
            exact
            exact-active-class="primary--text"
          >
            <v-list-item-icon>
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-group v-else :value="item.open" :prepend-icon="item.icon">
            <template v-slot:activator>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </template>

            <v-list-item
              v-for="i in item.children"
              :key="i.path"
              link
              :to="item.path + i.path"
              exact
            >
              <v-list-item-icon>
                <v-icon>mdi-circle-medium</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ i.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <v-sheet elevation="4" class="text-center pa-4">
          <div>
            <v-btn link text class=" text-capitalize" small>
              Documentation
            </v-btn>
          </div>
          <div class="mt-4">
            <v-btn
              color="orange"
              dark
              block
              class="text-capitalize download-btn"
            >
              Download Now
            </v-btn>
          </div>
        </v-sheet>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {
    "h-notification": () => import("./appbar/h-notification"),
    "h-search": () => import("./appbar/h-search")
  },
  data: () => ({
    drawer: {
      display: null,
      data: []
    },
    notifications: [
      {
        icon: "mdi-account",
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        icon: "mdi-account",
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        icon: "mdi-account",
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        icon: "mdi-account",
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        icon: "mdi-account",
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      }
    ],
    accounts: [
      { icon: "mdi-account-box-outline", title: "Profile" },
      { icon: "mdi-email-outline", title: "Email" },
      { icon: "mdi-format-list-checks", title: "Todo" },
      { divider: true, icon: "mdi-logout", title: "Logout" }
    ]
  }),
  methods: {
    toggleDrawer() {
      this.drawer.display = !this.drawer.display;
    },
    getRoutes() {
      this.$router.options.routes.forEach(route => {
        this.drawer.data.push(route);
      });
    }
  },
  created() {
    this.getRoutes();
  }
};
</script>

<style lang="scss">
.h-sticky {
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>

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

      <v-menu
        :close-on-content-click="false"
        left
        min-width="400"
        offset-y
        transition="slide-x-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="mr-1" icon>
            <v-badge
              :content="notifications.length"
              bordered
              color=" blue"
              offset-x="10"
              offset-y="8"
            >
              <v-icon>mdi-bell-outline</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <h-notification
          :items="notifications"
          @click:row="getClickedNotificationData"
        />
      </v-menu>

      <v-menu left offset-y transition="slide-x-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-badge
              bordered
              color="green"
              content="6"
              dot
              offset-x="6"
              offset-y="6"
            >
              <v-avatar color="grey" size="24"></v-avatar>
            </v-badge>
          </v-btn>
        </template>

        <v-list dense min-width="48" nav width="140">
          <template v-for="(item, index) in accounts">
            <v-divider v-if="item.divider" :key="index" />

            <v-list-item :key="item.title" link>
              <v-list-item-icon>
                <v-icon size="16" small>
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

    <v-navigation-drawer v-model="drawer.display" app class="elevation-1" fixed>
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

      <v-list dense nav>
        <v-list-item-group
          v-for="item in drawer.data"
          :key="item.path"
          color="primary"
        >
          <v-subheader v-if="item.subtitle" class="pa-1 mt-2 overline">
            {{ item.subtitle }}
          </v-subheader>

          <v-list-item
            v-if="item.children.length <= 1"
            :to="`${item.path}/${item.children[0].path}`"
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

          <v-list-group v-else :prepend-icon="item.icon" :value="item.open">
            <template v-slot:activator>
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
            </template>

            <v-list-item
              v-for="i in item.children"
              :key="i.path"
              :to="`${item.path}/${i.path}`"
              exact
              link
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
        <v-sheet class="text-center pa-4" elevation="4">
          <div class="mt-4">
            <v-switch
              v-model="$vuetify.theme.dark"
              inset
              label="Theme Dark"
            ></v-switch>

            <v-btn
              block
              class="text-capitalize download-btn"
              color="orange"
              dark
              href="https://github.com/AGDholo/vuetify-admin"
              target="_blank"
            >
              <v-icon left>mdi-github</v-icon>
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
    "h-notification": () => import("../base/h-notification"),
    "h-search": () => import("./appbar/h-search")
  },
  data: () => ({
    drawer: {
      display: null,
      data: []
    },
    notifications: [
      {
        id: 1,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min",
        outdated: true
      },
      {
        id: 2,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        id: 3,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        id: 4,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min"
      },
      {
        id: 5,
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
    },
    getClickedNotificationData(data) {
      console.table(data.id);
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

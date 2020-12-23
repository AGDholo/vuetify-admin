<template>
  <div>
    <example title="Notification">
      <h-notification :items="notifications" />
    </example>

    <example title="Click Callback" :readonly="false">
      <h-notification :items="notifications" @click:row="getClickData" />
    </example>

    <example title="Loading">
      <h-notification :items="notifications" loading />
    </example>

    <example title="Hover">
      <h-notification :items="notifications" hover />
    </example>

    <example title="No Data">
      <h-notification />
    </example>

    <example title="Height">
      <h-notification :items="notifications" height="200" />
    </example>

    <example title="Outlined">
      <h-notification outlined :items="notifications" />
    </example>

    <example title="Color">
      <h-notification
        headerColor="cyan lighten-1"
        bodyColor="cyan lighten-5"
        :items="notifications"
        dark
        color="transparent"
      />
    </example>
  </div>
</template>

<script>
export default {
  components: {
    "h-notification": () => import("@/components/base/h-notification")
  },
  data: () => ({
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
        time: "4 min",
        outdated: false
      },
      {
        id: 3,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min",
        outdated: false
      },
      {
        id: 4,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min",
        outdated: false
      },
      {
        id: 5,
        title: "Lorem ipsum dolor",
        desc:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
        time: "4 min",
        outdated: false
      }
    ]
  }),
  methods: {
    getClickData(data) {
      this.notifications[data.id - 1].outdated = !this.notifications[
        data.id - 1
      ].outdated;
    }
  }
};
</script>

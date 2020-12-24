<template>
  <div>
    <example
      title="Notification"
      :description="
        `Use the virtual scrolling feature for high performance purposes.`
      "
    >
      <h-notification :items="notifications" />
    </example>

    <example title="Click Callback" :readonly="false">
      <h-notification :items="notifications" @click:row="getClickData" />
    </example>

    <example title="Loading">
      <h-notification :items="notifications" loading />
    </example>

    <example title="Outdated">
      <h-notification :items="outdatedNotifications" />
    </example>

    <example title="Hover">
      <h-notification :items="notifications" hover />
    </example>

    <example title="No Data">
      <h-notification />
    </example>

    <example title="Scrollbar on hover">
      <h-notification :items="notifications" noScrollbar />
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
const notifications = [
  {
    title: "Lorem ipsum dolor",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
    time: "4 min",
    outdated: false
  }
];

const outdatedNotifications = [
  {
    title: "Lorem ipsum dolor",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
    time: "4 min",
    outdated: false
  },
  {
    title: "Outdated Notification",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
    time: "4 min",
    outdated: true
  },
  {
    title: "Lorem ipsum dolor",
    desc:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, repudiandae?",
    time: "4 min",
    outdated: false
  }
];

export default {
  components: {
    "h-notification": () => import("@/components/base/h-notification")
  },
  computed: {
    notifications() {
      return [...new Array(100)].reduce(items => {
        items.push(...notifications);

        return items;
      }, []);
    },
    outdatedNotifications() {
      return [...new Array(33)].reduce(items => {
        items.push(...outdatedNotifications);

        return items;
      }, []);
    }
  },
  data: () => ({}),
  methods: {
    getClickData(data, index) {
      alert(
        ` index: ${index} \n title: ${data.title} \n description ${data.desc}`
      );
    }
  }
};
</script>

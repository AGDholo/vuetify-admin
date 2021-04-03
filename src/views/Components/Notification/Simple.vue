<template>
  <div>
    <example
      :description="
        `Use the virtual scrolling feature for high performance purposes.`
      "
      title="Notification"
    >
      <h-notification :items="notifications" />
    </example>

    <example :readonly="false" title="Click Callback">
      <h-notification :items="notifications" @click:row="getClickData" />
    </example>

    <example title="Slot">
      <h-notification :items="outdatedNotifications">
        <template v-slot:title>
          Slot Title
        </template>

        <template v-slot:action>
          <v-chip label small>
            Slot Action
          </v-chip>
        </template>
      </h-notification>
    </example>

    <example title="Loading">
      <h-notification :items="notifications" loading />
    </example>

    <example title="Outdated">
      <h-notification :items="outdatedNotifications" />
    </example>

    <example title="Hover">
      <h-notification :hover="true" :items="notifications" />
    </example>

    <example title="No Data">
      <h-notification />
    </example>

    <example title="Scrollbar on hover">
      <h-notification :items="notifications" no-scrollbar />
    </example>

    <example title="Height">
      <h-notification :items="notifications" height="200" />
    </example>

    <example title="Three Line">
      <h-notification :items="notifications" three-line />
    </example>

    <example title="Outlined">
      <h-notification :items="notifications" outlined />
    </example>

    <example title="Color">
      <h-notification
        :items="notifications"
        body-color="cyan lighten-5"
        color="transparent"
        dark
        header-color="cyan lighten-1"
      />
    </example>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HNotification from "@/components/base/h-notification/index.vue";

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

@Component({
  name: "NotificationSimple",
  components: {
    HNotification
  }
})
export default class NotificationSimple extends Vue {
  private get notifications() {
    return [...new Array(100)].reduce(items => {
      items.push(...notifications);

      return items;
    }, []);
  }

  private get outdatedNotifications() {
    return [...new Array(33)].reduce(items => {
      items.push(...outdatedNotifications);

      return items;
    }, []);
  }

  private getClickData(data, index) {
    alert(
      ` index: ${index} \n title: ${data.title} \n description ${data.desc}`
    );
  }
}
</script>

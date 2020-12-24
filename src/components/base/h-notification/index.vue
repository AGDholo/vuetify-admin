<template>
  <v-card :outlined="outlined" :color="color">
    <v-list three-line :color="color" :class="{ 'h-scrollbar': noScrollbar }">
      <v-sheet
        class="h-sticky d-flex align-center justify-space-between"
        :color="headerColor"
      >
        <v-subheader class="font-weight-bold">Notifications</v-subheader>

        <div class="mr-1">
          <v-btn
            class="text-capitalize font-weight-bold"
            small
            color="h-list-header-button"
          >
            See all
          </v-btn>
        </div>
      </v-sheet>

      <v-progress-linear indeterminate v-if="loading" />

      <v-virtual-scroll
        v-if="items"
        :items="items"
        :item-height="itemHeight"
        :height="height"
      >
        <template v-slot:default="{ item, index }">
          <v-list-item
            link
            @click="$emit('click:row', item, index)"
            :class="{ bodyColor, 'h-list_hover': hover }"
          >
            <v-list-item-icon>
              <v-avatar size="32" :color="item.outdated ? 'grey' : 'primary'">
                <v-icon dark small>
                  {{ item.outdated ? "mdi-bell-check-outline" : "mdi-bell" }}
                </v-icon>
              </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle class="caption">{{
                item.desc
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action class="align-self-center">
              <v-list-item-action-text>
                {{ item.time }}
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-virtual-scroll>

      <v-list-item v-else>
        <v-list-item-title>
          {{ noDataText }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    items: {
      default: null,
      type: Array
    },
    height: {
      default: "300",
      type: String
    },
    itemHeight: {
      default: 88,
      type: Number
    },
    noDataText: {
      default: "No Data",
      type: String
    },
    outlined: {
      default: false,
      type: Boolean
    },
    color: {
      type: String
    },
    headerColor: {
      type: String
    },
    bodyColor: {
      type: String
    },
    dark: {
      default: false,
      type: Boolean
    },
    loading: {
      default: false,
      type: Boolean
    },
    hover: {
      default: false,
      type: Boolean
    },
    noScrollbar: {
      default: false,
      type: Boolean
    }
  }
};
</script>

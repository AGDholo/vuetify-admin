<template>
  <v-card max-height="400" width="400">
    <v-list three-line max-width="400">
      <v-sheet
        class="h-sticky d-flex align-center justify-space-between"
        color="white"
      >
        <v-subheader class="font-weight-bold">Notifications</v-subheader>

        <div class="mr-1">
          <v-btn
            class="text-capitalize font-weight-bold"
            small
            color="grey lighten-3"
          >
            See all
          </v-btn>
        </div>
      </v-sheet>

      <v-virtual-scroll :items="data" item-height="100%" width="400">
        <template v-slot:default="{ item }">
          <v-list-item link>
            <v-list-item-icon>
              <v-avatar size="32" color="primary">
                <v-icon dark small>
                  {{ item.icon }}
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
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>

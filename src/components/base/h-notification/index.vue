<template>
  <v-card :color="color" :outlined="outlined">
    <v-list
      :class="{ 'h-scrollbar': noScrollbar }"
      :color="color"
      :three-line="threeLine"
      class="pa-0 "
    >
      <v-sheet
        :color="headerColor"
        class="h-sticky d-flex align-center justify-space-between elevation-1 rounded-t"
      >
        <v-subheader class="font-weight-bold">
          <slot name="title">Notifications</slot>
        </v-subheader>

        <div class="mr-1">
          <slot name="action">
            <v-btn
              class="text-capitalize font-weight-bold"
              color="h-list-header-button"
              depressed
              small
            >
              See all
            </v-btn>
          </slot>
        </div>
      </v-sheet>

      <v-progress-linear v-if="loading" indeterminate />

      <v-virtual-scroll
        v-if="items && items.length > 0"
        :height="height"
        :item-height="itemHeight"
        :items="items"
      >
        <template v-slot:default="{ item, index }">
          <v-list-item
            :class="{ bodyColor, 'h-list_hover': hover }"
            link
            @click="$emit('click:row', item, index)"
          >
            <v-list-item-icon>
              <v-avatar :color="item.outdated ? 'grey' : 'primary'" size="32">
                <v-icon dark small>
                  {{ item.outdated ? "mdi-bell-check-outline" : "mdi-bell" }}
                </v-icon>
              </v-avatar>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle class="caption"
              >{{ item.desc }}
              </v-list-item-subtitle>
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

<script lang="ts">

import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "HNotification"
})

export default class HNotification extends Vue {
  @Prop({ default: undefined }) protected readonly items: Array<{ title: string; outdated: boolean, desc: string, time: string }> | undefined;
  @Prop({ default: false }) protected readonly threeLine!: boolean;
  @Prop({ default: "300" }) protected readonly height!: string;
  @Prop({ default: "No Data" }) protected readonly noDataText!: string;
  @Prop({ default: false }) protected readonly outlined!: boolean;
  @Prop() protected readonly color!: string;
  @Prop() protected readonly headerColor!: string;
  @Prop() protected readonly bodyColor!: string;
  @Prop({ default: false }) protected readonly dark!: boolean;
  @Prop({ default: false }) protected readonly loading!: boolean;
  @Prop({ default: false }) protected readonly hover!: boolean;
  @Prop({ default: false }) protected readonly noScrollbar!: boolean;

  public get itemHeight() {
    return this.threeLine ? "88" : "64";
  }
}
</script>

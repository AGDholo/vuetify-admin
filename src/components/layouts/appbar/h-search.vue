<template>
  <v-autocomplete
    clearable
    v-model="select"
    :loading="isLoading"
    :items="items"
    :search-input.sync="search"
    class="mx-4"
    dense
    rounded
    hide-details
    :label="label"
    solo
    filled
    flat
    prepend-inner-icon="mdi-magnify"
    background-color="h-appbar-search"
    @click:clear="clearSearch"
    @blur="clearSearch"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          Search for your favorite
          <strong>Cryptocurrency</strong>
        </v-list-item-title>
      </v-list-item>
    </template>

    <template v-slot:item="data">
      <template>
        <v-sheet max-width="600">
          <v-list two-line>
            <v-list-item-content>
              <v-list-item-title v-html="data.item.text"></v-list-item-title>
              <v-list-item-subtitle
                v-html="data.item.user"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list>
        </v-sheet>
      </template>
    </template>
  </v-autocomplete>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  },
  data: () => ({
    label: 'Search (press "ctrl + /" to focus)',
    select: null,
    search: null,
    isLoading: false,
    items: []
  }),
  methods: {
    clearSearch() {
      this.items = [];
    }
  },
  watch: {
    search(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      // Items have already been requested
      if (this.isLoading) return;

      this.isLoading = true;

      // Lazily load input items
      fetch(this.url + val)
        .then(res => res.json())
        .then(res => {
          console.log(res);
          this.items = res;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

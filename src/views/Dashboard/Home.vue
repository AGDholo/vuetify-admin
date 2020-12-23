<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" lg="4" xl="3">
        <v-card :to="{ name: 'Notification-Simple' }">
          <v-card-title>Notification</v-card-title>

          <v-card-text>
            <v-sheet color="primary" height="8" width="100" class="mt-n7" />
          </v-card-text>

          <v-skeleton-loader
            v-for="i in 3"
            :key="i"
            type="list-item-avatar-three-line"
            boilerplate
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

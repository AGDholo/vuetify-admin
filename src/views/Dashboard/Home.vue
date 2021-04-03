<template>
  <div>
    <div>
      <h3 class="text-h3 font-weight-bold">Components</h3>

      <v-row class="mt-3">
        <v-col cols="12" lg="4" md="6" xl="3">
          <v-card :to="{ name: 'Notification-Simple' }">
            <v-card-title>Notification</v-card-title>

            <v-card-text>
              <v-sheet class="mt-n7" color="primary" height="8" width="100" />
            </v-card-text>

            <v-skeleton-loader
              boilerplate
              max-height="200"
              type="list-item-avatar-three-line, list-item-avatar-three-line, list-item-avatar-three-line"
            />
          </v-card>
        </v-col>

        <v-col cols="12" lg="4" md="6" xl="3">
          <v-card :to="{ name: 'Data-Table-Simple' }">
            <v-card-title>DataTable</v-card-title>

            <v-card-text>
              <v-sheet class="mt-n7" color="primary" height="8" width="100" />
            </v-card-text>

            <v-skeleton-loader
              boilerplate
              max-height="200"
              type="table-heading, table-tbody"
            />
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-8">
      <h3 class="text-h3 font-weight-bold">Pages</h3>

      <v-row class="mt-3">
        <v-col cols="12" lg="4" md="6" xl="3">
          <v-card :to="{ name: 'Register' }">
            <v-card-title>Register</v-card-title>

            <v-card-text>
              <v-sheet class="mt-n7" color="primary" height="8" width="100" />
            </v-card-text>

            <v-skeleton-loader boilerplate type="article, actions" />
          </v-card>
        </v-col>

        <v-col cols="12" lg="4" md="6" xl="3">
          <v-card :to="{ name: 'Login' }">
            <v-card-title>Login</v-card-title>

            <v-card-text>
              <v-sheet class="mt-n7" color="primary" height="8" width="100" />
            </v-card-text>

            <v-skeleton-loader boilerplate type="article, actions" />
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
}
</script>

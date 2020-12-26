<template>
  <v-sheet color="transparent" height="100vh">
    <v-row align="center" class="fill-height" no-gutters>
      <v-col v-if="$vuetify.breakpoint.lgAndUp" cols="12" md="6">
        <v-sheet color="primary darken-2" dark height="100vh" width="100%">
          <v-container class="justify-center" fill-height>
            <div class="d-flex align-center flex-column text-center">
              <h1 class="text-xl-h1 text-md-h2 font-weight-bold">
                {{ hero && hero.title ? hero.title : "Vuetify Admin" }}
              </h1>

              <h3 class="text-xl-h3 text-md-h4 mt-4">
                {{
                  hero && hero.desc
                    ? hero.desc
                    : "Out of the box developer friendly vuetify enhanced backend panel."
                }}
              </h3>

              <slot name="hero-action" />
            </div>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col cols="12" lg="6">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" lg="6" md="8" xl="4">
              <h3 class="text-h3 font-weight-bold text-center">
                {{ title }}
              </h3>

              <div class="mt-4">
                <slot name="form" />
              </div>

              <div class="my-8">
                <div class="d-flex align-center">
                  <v-sheet color="grey lighten-2" height=".5" width="100%" />

                  <div class="mx-2">Or</div>

                  <v-sheet color="grey lighten-2" height=".5" width="100%" />
                </div>
              </div>

              <div class="text-center">
                <slot name="sso" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Welcome!"
    },
    hero: {
      type: Object
    }
  }
};
</script>

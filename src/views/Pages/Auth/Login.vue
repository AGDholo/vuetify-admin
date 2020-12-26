<template>
  <p-auth title="Welcome Back!">
    <template v-slot:form>
      <v-form>
        <v-text-field
          label="Email Address"
          prepend-inner-icon="mdi-email-outline"
        />

        <v-text-field label="Password" prepend-inner-icon="mdi-lock-outline" />

        <div class="d-flex justify-space-between align-center">
          <v-btn class="font-weight-bold" color="primary darken-1" large to="/">
            Login
          </v-btn>

          <v-btn
            class="text-capitalize"
            color="transparent primary--text text-darken-1"
            depressed
          >
            Forget Password?
          </v-btn>
        </div>
      </v-form>
    </template>

    <template v-slot:sso>
      <v-btn class="text-capitalize" depressed large>
        <v-icon left>mdi-google</v-icon>
        Sign in with Google
      </v-btn>
    </template>
  </p-auth>
</template>

<script>
export default {
  components: {
    "p-auth": () => import("@/components/pages/auth")
  }
};
</script>

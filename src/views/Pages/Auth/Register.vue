<template>
  <p-auth>
    <template v-slot:form>
      <v-form>
        <v-text-field
          label="Full Name"
          prepend-inner-icon="mdi-account-circle-outline"
        />

        <v-text-field
          label="Email Address"
          prepend-inner-icon="mdi-email-outline"
        />

        <v-text-field label="Password" prepend-inner-icon="mdi-lock-outline" />

        <v-btn
          block
          class="font-weight-bold"
          color="primary darken-1"
          large
          to="/"
        >
          Create your account
        </v-btn>
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

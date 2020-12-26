<template>
  <div class="mb-6">
    <h3 class="text-h3 font-weight-bold">
      {{ title }}
    </h3>

    <v-sheet class="mt-n3" color="primary" height="10" width="100" />

    <p class="text-h5">
      {{ description }}
    </p>

    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>

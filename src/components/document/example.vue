<template>
  <div class="mb-6">
    <h4 class="text-h4">
      {{ title }}
    </h4>

    <v-sheet color="primary" height="10" width="100" class="mt-n3" />

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
    }
  }
};
</script>

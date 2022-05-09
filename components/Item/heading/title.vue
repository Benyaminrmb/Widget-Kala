<template>
  <h1
    class="horizontalLines text-customDarkblue cursor-pointer text-xl font-light leading-7">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      default: null,
    },
  },
}
</script>

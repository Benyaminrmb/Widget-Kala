<template>
  <a
    href="#"
    class="btn-custom-outline-dark-blue">
    {{ title }}
  </a>
</template>

<script>
export default {
  name: "CategoryBtn",
  props:{
    title:{
      default:null
    }
  }
}
</script>

<style scoped>

</style>

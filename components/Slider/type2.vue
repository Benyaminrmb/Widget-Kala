<template>
  <div class="grid mt-7 gap-x-7 grid-cols-12 justify-between">
    <div v-for="i in 4" v-bind:key="i" class="col-span-3">
      <SliderItem :src="require('~/assets/images/image3.png')"></SliderItem>
    </div>
  </div>
</template>
<script>
export default {};
</script>

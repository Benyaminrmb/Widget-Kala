<template>
  <div class="grid gap-7 grid-cols-12 justify-between">
    <div class="col-span-12 md:col-span-4">
      <SliderItem :src="require('~/assets/images/image1.png')"></SliderItem>
    </div>
    <div class="col-span-12 md:col-span-8">
      <SliderItem :src="require('~/assets/images/image2.png')"></SliderItem>
    </div>
  </div>
</template>
<script>
export default {}
</script>

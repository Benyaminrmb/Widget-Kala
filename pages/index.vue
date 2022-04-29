<template>
  <div class="col-span-12 mt-7">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-x-7 grid-cols-12 justify-between">
        <div class="col-span-4">
          <ItemSlider :src="require('~/assets/images/image1.png')"></ItemSlider>
        </div>
        <div class="col-span-8">
          <ItemSlider :src="require('~/assets/images/image2.png')"></ItemSlider>
        </div>
      </div>

      <div class="grid mt-7 gap-x-7 grid-cols-12 justify-between">
        <div v-for="i in 4" class="col-span-3">
          <ItemSlider :src="require('~/assets/images/image3.png')"></ItemSlider>
        </div>
      </div>

      <div class="grid mt-7 gap-x-7 grid-cols-12 justify-between">
        <div class="col-span-10 flex">
          <span class="flex">-</span>
          <div class="flex text-xl">awdawd</div>
          <div class="flex">zzz</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",
};
</script>

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
        <div class="col-span-10 flex gap-x-5">
          <span class="flex">
            <span class="icon text-3xl icon-shield"></span>
          </span>
          <div class="flex text-gray-600 text-2xl">پرفروش ترین ها</div>
          <div
            class="relative after:w-0.5 after:absolute after:bg-gray-600 after:h-6 after:left-0 after:top-1"
          ></div>

          <ul class="tabs">
            <li class="active">هدفون</li>
            <li>هدفون</li>
            <li>هدفون</li>
            <li>هدفون</li>
          </ul>
        </div>
        <div class="col-span-2 justify-end flex">
          <button
            class="border w-full rounded-md text-sm border-sky-500 text-sky-500 px-3"
          >
            همه محصولات را ببینید
          </button>
        </div>
      </div>

      <div class="grid mt-7 gap-x-7 grid-cols-12 justify-between">
        <ItemProduct v-for="i in 4"></ItemProduct>
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

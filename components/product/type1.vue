<template>
  <div class="w-full">
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
          class="custom-btn-secondary-outline"
        >
          همه محصولات را ببینید
        </button>
      </div>
    </div>

    <div class="grid mt-7 gap-x-7 grid-cols-12 justify-between">
      <ItemProduct v-for="i in 4" v-bind:key="i"></ItemProduct>
    </div>
  </div>
</template>

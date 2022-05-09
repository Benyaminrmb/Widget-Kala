<template>
  <div class="w-full">
    <div class="grid mt-7 gap-x-7 grid-cols-12 justify-between">
      <div class="col-span-10 flex gap-x-5">
        <span class="flex">
          <span class="icon text-3xl icon-shield"></span>
        </span>
        <div class="flex text-gray-600 text-2xl">مقالات ما</div>
      </div>
      <div class="col-span-2 justify-end flex">
        <button class="custom-btn-secondary-outline">
          مقالات بیشتر را بخوانید
        </button>
      </div>
    </div>

    <div class="grid mt-7 gap-7 grid-cols-3">
      <div class="flex col-span-1 relative">
        <div class="flex w-full">
          <img
            src="~/assets/images/blog1.png"
            class="rounded-md w-full"
            alt="" />
        </div>
        <div
          class="absolute rounded-md text-over-image bottom-0 text-center inset-x-0">
          <h2 class="text-white mb-2 text-xl">
            <a href="#">یک پست اختصاصی</a>
          </h2>
          <div class="flex justify-center">
            <span
              class="bg-white flex items-center px-2 crooked-line relative text-xl">
              <span class="flex">JANEBI</span>
              <span class="icon text-xl flex icon-book"></span>
            </span>
          </div>
        </div>
      </div>
      <div
        v-for="i in 2"
        v-bind:key="i"
        class="grid gap-7 grid-rows-2 col-span-1 relative">
        <BlogItem v-for="i in 2" v-bind:key="i"></BlogItem>
      </div>
    </div>
  </div>
</template>

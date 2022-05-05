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
        <button
          class="border w-full rounded-md text-sm border-sky-500 text-sky-500 px-3"
        >
          مقالات بیشتر را بخوانید
        </button>
      </div>
    </div>

    <div class="grid mt-7 gap-7 grid-cols-3">
      <div class="flex col-span-1 relative">
        <div class="flex w-full">
          <img src="~/assets/images/product1.png"
               class=" rounded-md w-full" alt="">
        </div>
        <div class="absolute rounded-md text-over-image p-2 py-4 bottom-0  text-center inset-x-0">
          <h2 class="text-white text-2xl">یک پست اختصاصی</h2>
        </div>
      </div>
    </div>

  </div>
</template>

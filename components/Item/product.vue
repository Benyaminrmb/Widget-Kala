<template>
  <div
    class="col-span-3 flex rounded-md flex-wrap border border-gray-200 p-3 transition duration-150 group transform hover:shadow-2xl"
  >
    <div class="w-full flex">
      <img
        src="~/assets/images/product1.png"
        class="w-full rounded-lg"
        alt=""
      />
    </div>
    <div class="flex">
      <h3 class="text-gray-800 font-light leading-6">
        لنز سوپر واید گوشی موبایل F30 0.3X Super Wide JSJSJSJSJSJSJSJs
      </h3>
    </div>
    <div class="flex text-orange-500 text-xs justify-end w-full">
      <span>VIVU برند</span>
    </div>
    <div class="flex line-through text-gray-700 text-xl w-full">
            <span
              class="after:content-[attr(data-after)] after:text-sm items-center after:left-0 relative"
              data-after="هزار تومان"
            >150،000</span
            >
    </div>
    <div
      class="flex gap-x-4 items-center justify-between text-gray-700 text-xl w-full"
    >
            <span
              class="after:content-[attr(data-after)] after:text-sm items-center after:left-0 relative"
              data-after="هزار تومان"
            >150،000</span
            >

      <div class="px-2 py-1 bg-gray-400 text-xs rounded">40%</div>
      <div
        class="border-2 group-hover:bg-gray-800 group-hover:text-white transition duration-150 items-center justify-center rounded-xl border-gray-800"
      >
        <button class="flex">
          <span class="icon flex text-5xl icon-trolley"> </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product"
}
</script>

<style scoped>

</style>

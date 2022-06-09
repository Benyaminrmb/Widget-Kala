<template>
  <div class="w-full flex flex-wrap  border border-customDarkWhite rounded-md">
    <div class="flex w-full bg-customLightblue p-3 px-12">
      <span class="darkHorizontalLines text-white">فیلتر ها</span>
    </div>

    <div class="flex flex-wrap p-3 py-4">
      <div class="flex w-full justify-between border-b pb-4">
        <span class="flex text-customGray"> جستجو کنید </span>
        <span class="flex">+</span>
      </div>

      <div class="flex mt-3 flex-wrap w-full">
        <div class="flex w-full">برند ها</div>

        <div class="flex mt-3 w-full">
          <input
            class="p-2 text-gray-600 w-full border rounded-md"
            placeholder="برند خود را جستجو کنید"
            type="text" />
        </div>

        <div class="flex flex-wrap mt-3 w-full pb-4 border-b">
          <div
            class="flex flex-wrap w-full gap-y-2 overflow-y-scroll h-280 thin-scrollbar px-2">
            <div
              v-for="i in 40"
              class="flex w-full justify-between items-center flex-wrap">
              <div class="flex gap-x-2 items-center">
                <div class="flex">
                  <input class="w-4 h-4" type="checkbox" />
                </div>
                <span class="flex">نیلکن</span>
              </div>

              <div class="flex">
                <span class="text-gray-600 text-xs">nilken</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex border-b border-customDarkWhite pb-3 mt-3 w-full">
          <div
            class="flex w-full justify-between items-center flex-wrap">
            <span class="flex text-customGray"> آیتم‌های موجود </span>
            <div class="flex">
              <label for="toggleB" class="cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                  <!-- input -->
                  <input type="checkbox" id="toggleB" class="sr-only" />
                  <!-- line -->
                  <div
                    class="block parent bg-customLightgray2 w-14 h-7 rounded-md"></div>
                  <!-- dot -->
                  <div
                    class="dot absolute left-1 top-1 bg-customGray w-5 h-5 rounded-full transition"></div>
                </div>
                <!-- label -->
              </label>
            </div>
          </div>
        </div>

        <div class="flex mt-3 w-full">
          <div
            class="flex w-full justify-between items-center flex-wrap">
            <span class="flex text-customGray">آیتم‌های تخفیف دار</span>
            <div class="flex">
              <label for="toggleB" class="cursor-pointer">
                <!-- toggle -->
                <div class="relative">
                  <!-- input -->
                  <input type="checkbox" id="toggleB" class="sr-only" />
                  <!-- line -->
                  <div
                    class="block parent bg-customLightgray2 w-14 h-7 rounded-md"></div>
                  <!-- dot -->
                  <div
                    class="dot absolute left-1 top-1 bg-customGray w-5 h-5 rounded-full transition"></div>
                </div>
                <!-- label -->
              </label>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideFilter"
}
</script>

<style scoped>

</style>

<template>
  <div class="col-span-12 mt-7">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-5 grid-cols-12">
        <div class="col-span-3 flex flex-wrap">
          <SliderItem
            :src="require('~/assets/images/commercial1.png')"></SliderItem>
        </div>
        <div class="col-span-9 gap-5 flex flex-wrap flex-col">
          <ul class="flex flex-wrap gap-x-3 gap-y-1 w-full">
            <li v-for="(i, key) in 10" v-bind:key="i">
              <ItemCategoryBtn
                :class="key === 1 ? 'active' : ''"
                :title="'شارژر و کابل'"></ItemCategoryBtn>
            </li>
          </ul>

          <div
            class="w-full flex flex-wrap border border-customGray rounded-md p-5">
            <ItemHeadingBox></ItemHeadingBox>
          </div>
        </div>

        <div class="col-span-3 flex flex-wrap">

          <div class="w-full border border-customDarkWhite rounded-md">
            <div class="bg-customLightblue p-3 px-12">
              <span class="darkHorizontalLines">wdwd</span>
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'categories',
  layout: 'default',
}
</script>

<style scoped></style>

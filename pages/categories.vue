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

        <div class="col-span-3 block flex-wrap">
          <ItemSideFilter></ItemSideFilter>
        </div>

        <div class="col-span-9 gap-5 flex flex-wrap flex-col">
          <ItemSortBy></ItemSortBy>

          <div class="flex w-full  ">
            <div class="product-tabs-content gap-6">
              <ItemProduct class="col-span-4" v-for="i in 9" v-bind:key="i"></ItemProduct>
            </div>
          </div>


          <div class="flex flex-wrap w-full justify-center gap-4">
            <a href="#" class="flex justify-center items-center border border-customDarkWhite text-customGray rounded-md p-3 gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="9.042" height="16.001" viewBox="0 0 9.042 16.001">
                <path id="Path_426" data-name="Path 426" d="M12,23a1,1,0,0,1-.71-1.71L17.62,15,11.33,8.71a1,1,0,0,1,1.41-1.42l7,7a1,1,0,0,1,0,1.42l-3.858,3.858L12.74,22.71A1,1,0,0,1,12,23Z" transform="translate(-10.994 -6.999)" fill="#9195a0"/>
              </svg>

              <span>
                قبلی
              </span>
            </a>
            <div class="flex justify-center items-center border border-customDarkWhite rounded-md p-3 gap-3">
              <a href="#" class="paginate-btn active">
                1
              </a>

              <a href="#" class="paginate-btn">
                2
              </a>

              <a href="#" class="paginate-btn">
                3
              </a>

              <div class="flex mx-6 p-2 px-3 gap-2">
                ...
              </div>


              <a href="#" class="paginate-btn">
                12
              </a>

              <a href="#" class="paginate-btn">
                13
              </a>

              <a href="#" class="paginate-btn">
                14
              </a>


              <div class="flex mx-6 p-2 px-3 gap-2">
                ...
              </div>


              <a href="#" class="paginate-btn">
                22
              </a>

              <a href="#" class="paginate-btn">
                23
              </a>

              <a href="#" class="paginate-btn">
                24
              </a>


            </div>
            <a  href="#" class="flex justify-center items-center border border-customDarkWhite text-customGray rounded-md p-3 gap-2">
              بعدی

              <svg xmlns="http://www.w3.org/2000/svg" width="9.042" height="16.001" viewBox="0 0 9.042 16.001">
                <path id="Path_426" data-name="Path 426" d="M19.03,23a1,1,0,0,0,.71-1.71L13.41,15,19.7,8.71a1,1,0,0,0-1.41-1.42l-7,7a1,1,0,0,0,0,1.42l7,7A1,1,0,0,0,19.03,23Z" transform="translate(-10.994 -6.999)" fill="#9195a0"/>
              </svg>

              <span>

              </span>
            </a>
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

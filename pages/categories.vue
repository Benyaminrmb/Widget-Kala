<template>
  <div class="col-span-12 mt-7">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid gap-5 grid-cols-12">
        <div class="col-span-3 flex flex-wrap">
          <div class="w-full rounded-md">
            <img
              src="~/assets/images/commercial1.png"
              alt=""
              class="w-full rounded-md"
            />
          </div>
        </div>
        <div class="col-span-9 flex flex-wrap">
          <div class="grid gap-5 grid-rows-2 w-full">
<!--            TODO it's must generate without `items-start` Idk how to fix it yet. -->
            <div class="row-span-1  gap-3 w-full flex flex-wrap justify-center items-start">

              <div v-for="(i,key) in 12" v-bind:key="i"
                   :class="key === 0 ? 'active' : ''"
                   class="btn-custom-outline-white">
                <a href="#"> شارژر و کابل </a>awd
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "categories",
  layout: "default",
};
</script>

<style scoped></style>

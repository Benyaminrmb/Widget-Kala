<template>
<div class="col-span-12 bg-slate-800 text-white">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-12 justify-between">
      <div class="col-span-8 gap-x-10 flex">

        <MenuItem :class="key === 0?'active current-menu-item':''"
                  v-for="(i,key) in 10"
                  v-bind:key="i"></MenuItem>

      </div>
      <div class="col-span-4 justify-end flex">
        <button class="bg-orange-400 px-3 rounded">خرید عمده محصولات</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>

<template>
  <header class="col-span-12">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="grid grid-cols-12 py-9">
        <div class="col-span-2 flex-wrap flex">
          <span class="flex text-2xl w-full">Widget Kala</span>
          <span class="flex text-xs w-full">online shopping accessories</span>
        </div>
        <div class="col-span-5 flex-wrap flex">
          <HeaderSearchbox></HeaderSearchbox>
        </div>
        <div class="col-span-5 justify-end gap-x-2 flex-wrap flex">
          <HeaderCart></HeaderCart>
          <HeaderRegister></HeaderRegister>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>

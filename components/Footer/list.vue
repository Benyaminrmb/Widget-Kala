<template>
  <div class="flex  flex-wrap gap-4 col-span-1 w-full">
    <div class="flex w-full ">
      <span class="text-white ">عنوان تیتر اول</span>
    </div>
    <div class="flex w-full">
      <ul class="footer-list">
        <li v-for="i in 7 " v-bind:key="i">عنوان تیتر اول</li>
      </ul>
    </div>
  </div>
</template>

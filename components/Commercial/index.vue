<template>
  <div class="bg-gray-800 my-7 w-full">
    <div class="container p-14 mx-auto px-5 sm:px-6 lg:px-8">
      <h3 class="text-2xl text-white">برند ها</h3>

      <div class="mt-7 grid gap-x-5 grid-cols-6">
        <CommercialItem v-for="i in 6" v-bind:key="i" :i="i"></CommercialItem>
      </div>
    </div>
  </div>
</template>

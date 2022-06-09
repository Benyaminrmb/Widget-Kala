<template>
  <div class="relative inline-flex">
    <a href="#" class="cart-button gap-x-4">
      <span class="flex hidden md:block">45,000,000 تومان</span>
      <span class="icon flex md:text-3xl text-6xl text-customGray md:text-white icon-trolley"></span>
      <span class="cart-count-badge">
        <span class="animate"></span>
        <span class="count">
          <span class="w-full text-xs">2</span>
        </span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Cart',
}
</script>

<style scoped></style>

<template>
  <div
    class="col-span-1 min-w-1/2 flex flex-wrap transition duration-150 group transform">
    <img
      class="w-full grayscale flex rounded-md group-hover:grayscale-0"
      :src="require('~/assets/images/adv' + i + '.png')"
      alt="" />
  </div>
</template>
<script>
export default {
  props: ['i'],
}
</script>

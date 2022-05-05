<template>
  <div class="w-full flex h-full">
    <img :src="src"
         class="w-full h-full border rounded-lg"
         alt="">
  </div>
</template>
<script>
export default {
  props:['src'],
  name: "slider-item"
}
</script>

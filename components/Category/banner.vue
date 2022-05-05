<template>

    <img class="w-full flex rounded-md"
         :src="require('~/assets/images/category'+i+'.png')" alt="">

</template>
<script>
export default {
  props:['i']
}
</script>

<template>
  <div class="col-span-12 mt-7">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Slider></Slider>

      <SliderType2></SliderType2>

      <productType1></productType1>
      <productType1></productType1>
    </div>

    <Commercial></Commercial>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <productType1></productType1>
      <productType1></productType1>
    </div>

    <Category></Category>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Blog></Blog>
    </div>


  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
}
</script>

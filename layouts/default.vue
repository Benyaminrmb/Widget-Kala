<template>
  <div class="grid grid-cols-12 gap-x-5">
    <Header></Header>
    <div class="col-span-12 flex px-6 justify-between container mx-auto md:hidden">
      <HeaderSearchbox></HeaderSearchbox>
    </div>
    <Menu class="md:flex hidden"></Menu>

    <Nuxt></Nuxt>

    <Footer class="col-span-12"></Footer>

  </div>
</template>
<script>
export default {
  name: 'default',
}
</script>

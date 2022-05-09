<template>
  <li class="menu-item nav-item">
    <nuxt-link :to="href" class="nav-link"
      ><span><slot /></span
    ></nuxt-link>
  </li>
</template>
<script>
export default {
  props: {
    href: {
      default: '/',
    },
  },
}
</script>

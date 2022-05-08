<template>
    <div class="menu-section">
        <div class="container">
            <div class="grid grid-cols-12 justify-between">
                <ul id="main-menu" class="navbar-nav main-menu">
                    <MenuItem
                        :class="key === 0 ? 'active current-menu-item' : ''"
                        v-for="(i, key) in 5"
                        v-bind:key="i"
                        >لینک منوی {{ i }}
                    </MenuItem>
                    <li class="divider"></li>
                    <MenuItem v-for="(i, k) in 1" :key="i">
                        منوی {{ k }}
                    </MenuItem>
                    <MenuItem :href="'/categories'"> categories </MenuItem>
                </ul>
                <div class="major-shopping-container">
                    <a href="#" class="major-shopping">خرید عمده محصولات</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
}
</script>

<style scoped></style>

<template>
    <div class="search-box">
        <input
            type="search"
            name="q"
            placeholder="از بین 7 هزار محصول جانبی موبایل و تبلت جستجو کنید"
            autocomplete="off" />
        <span class="submit-button">
            <button type="submit" class="hover:shadow-outline">
                <span class="icon icon-search"></span>
                <span class="sr-only">جستجو</span>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Searchbox',
}
</script>

<style scoped></style>

<template>
    <div class="bg-customLightblue my-7 w-full">
        <div class="container p-14 mx-auto px-5 sm:px-6 lg:px-8">
            <div class="grid gap-5 grid-cols-6">
                <CategoryBanner
                    v-for="i in 3"
                    v-bind:key="i"
                    :i="i"
                    class="col-span-2"></CategoryBanner>

                <CategoryLink
                    v-for="(i, key) in 6"
                    v-bind:key="i"
                    class="col-span-1 font-light"
                    :class="
                        key === 0
                            ? 'bg-customDarkblue text-white'
                            : 'bg-white text-customDarkblue'
                    "></CategoryLink>
            </div>
        </div>
    </div>
</template>

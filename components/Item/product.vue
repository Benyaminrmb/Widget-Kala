<template>
    <div class="single-product-item">
        <div class="w-full flex">
            <img
                src="~/assets/images/product1.png"
                class="w-full rounded-lg"
                alt="" />
        </div>
        <div class="flex">
            <h3
                class="text-customDarkblue cursor-pointer text-base font-light leading-7">
                لنز سوپر واید گوشی موبایل F30 0.3X Super Wide JSJSJSJSJSJSJSJs
            </h3>
        </div>
        <div
            class="flex cursor-pointer text-orange-500 text-xs justify-end w-full">
            <a>VIVU برند</a>
        </div>
        <div class="flex line-through text-gray-700 text-xl w-full">
            <span
                class="after:content-[attr(data-after)] after:text-sm items-center after:left-0 relative"
                data-after="هزار تومان"
                >150،000</span
            >
        </div>
        <div
            class="flex gap-x-4 items-center justify-between text-gray-700 text-xl w-full">
            <span
                class="after:content-[attr(data-after)] after:text-sm items-center after:left-0 relative"
                data-after="هزار تومان"
                >150،000</span
            >

            <div class="px-2 py-1 bg-customLightGray text-xs rounded">40%</div>
            <div
                class="border-2 group-hover:bg-customDarkblue group-hover:text-white transition duration-150 items-center justify-center rounded-xl border-customDarkblue">
                <button class="flex justify-center">
                    <span
                        class="icon justify-center w-10 flex text-4xl icon-trolley">
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'product',
}
</script>

<style scoped></style>

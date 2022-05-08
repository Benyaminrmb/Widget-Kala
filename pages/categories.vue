<template>
    <div class="col-span-12 mt-7">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid gap-5 grid-cols-12">
                <div class="col-span-3 flex flex-wrap">
                    <div class="w-full rounded-md">
                        <img
                            src="~/assets/images/commercial1.png"
                            alt=""
                            class="w-full rounded-md" />
                    </div>
                </div>
                <div class="col-span-9 flex flex-wrap flex-col">
                      <ul class="row-span-1 gap-x-3 gap-y-1 w-full flex flex-wrap justify-start items-start">
                          <li v-for="(i, key) in 10" v-bind:key="i">
                              <a href="#" :class="key === 1 ? 'active' : ''" class="btn-custom-outline-dark-blue">  شارژر و کابل {{ i }}</a>
                          </li>
                      </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'categories',
    layout: 'default',
}
</script>

<style scoped></style>

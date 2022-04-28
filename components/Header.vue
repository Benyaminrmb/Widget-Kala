<template>
  <header class="col-span-12">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="grid grid-cols-12 py-9">
        <div class="col-span-2 flex-wrap flex">
          <span class="flex text-2xl w-full">Widget Kala</span>
          <span class="flex text-xs w-full">online shopping accessories</span>
        </div>
        <div class="col-span-5 flex-wrap flex">
          <div class="relative w-full text-gray-600 focus-within:text-gray-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <span class="icon text-3xl icon-search"></span>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-2 h-full px-4 text-sm text-white border block w-full rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="از بین 7 هزار محصول جانبی موبایل و تبلت جستجو کنید"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="col-span-5 justify-end gap-x-2 flex-wrap flex">
          <span class="relative inline-flex">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm rounded-md text-white bg-sky-400 transition ease-in-out duration-150 ring-1 ring-slate-900/10"
            >
              45,000,000 تومان
              <span class="icon text-3xl text-white icon-trolley"></span>
            </button>
            <span
              class="flex absolute h-7 w-7 text-center text-white -top-2 -left-2"
            >
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-800 opacity-75"
              ></span>
              <span
                class="relative inline-flex items-center rounded-full text-center h-7 w-7 shadow-2xl bg-gray-800"
              >
                <span class="w-full text-xs">2</span>
              </span>
            </span>
          </span>

          <button
            class="inline-flex gap-x-2 items-center px-2 border hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md"
          >
            ورود | ثبت نام
            <span class="icon text-3xl text-gray-500 icon-profile"></span>
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

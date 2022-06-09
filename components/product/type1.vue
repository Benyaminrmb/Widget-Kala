<template>
  <div class="w-full">
    <div class="flex mt-7 gap-x-7 justify-between">
      <div class="flex gap-x-5">
        <span class="flex">
          <span class="icon text-3xl icon-shield"></span>
        </span>
        <div class="flex text-gray-600 text-2xl">پرفروش ترین ها</div>
        <div
          class="relative md:block hidden after:w-0.5 after:absolute after:bg-gray-600 after:h-6 after:left-0 after:top-1"></div>

        <ul class="tabs">
          <li class="active"><button>هدفون</button></li>
          <li><button>هدفون</button></li>
          <li><button>هدفون</button></li>
          <li><button>هدفون</button></li>
        </ul>
      </div>
      <div class="justify-end flex">
        <button class="custom-btn-secondary-outline">



          <span class='flex items-center gap-2'>
            همه محصولات را ببینید
            <svg xmlns="http://www.w3.org/2000/svg" class='md:hidden flex' width="14.49" height="11.146" viewBox="0 0 14.49 11.146">
              <path id="Path_15172" data-name="Path 15172" d="M27.91,18.8l-2.556,2.556v-9.57a1.115,1.115,0,1,0-2.229,0v9.57L20.569,18.8a1.114,1.114,0,1,0-1.576,1.576l4.458,4.458a1.114,1.114,0,0,0,1.576,0l4.458-4.458A1.114,1.114,0,1,0,27.91,18.8Z" transform="translate(25.156 -18.667) rotate(90)" fill="#50a8ea"/>
            </svg>
          </span>


        </button>
      </div>
    </div>
    <div class="product-tabs-content">
      <ItemProduct v-for="i in 4" v-bind:key="i"></ItemProduct>
    </div>
  </div>
</template>

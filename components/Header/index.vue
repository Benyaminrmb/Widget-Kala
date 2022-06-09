<template>
  <header class="col-span-12">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div class="md:grid flex md:grid-cols-12 items-center py-9 justify-between lg:items-center">
        <div class="md:hidden flex">
          <svg xmlns="http://www.w3.org/2000/svg" class='h-6 w-6' viewBox="0 0 17 14">
            <g id="Group_2048" data-name="Group 2048" transform="translate(-348.5 -8.5)">
              <line id="Line_554" data-name="Line 554" x2="15" transform="translate(349.5 9.5)" fill="none" stroke="#9195a0" stroke-linecap="round" stroke-width="2"/>
              <line id="Line_555" data-name="Line 555" x2="15" transform="translate(349.5 15.5)" fill="none" stroke="#9195a0" stroke-linecap="round" stroke-width="2"/>
              <line id="Line_556" data-name="Line 556" x2="15" transform="translate(349.5 21.5)" fill="none" stroke="#9195a0" stroke-linecap="round" stroke-width="2"/>
            </g>
          </svg>

        </div>
        <div class="col-span-2 flex-wrap flex">
          <span class="flex items-center md:justify-start justify-center gap-3 text-2xl w-full">
            <span>Widget Kala</span>
          </span>
          <span class="flex text-xs md:justify-start justify-center w-full">online shopping accessories</span>
        </div>
        <div class="col-span-1 flex-wrap hidden md:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.192"
            height="32.66"
            viewBox="0 0 32.192 32.66">
            <path
              id="Path_311"
              data-name="Path 311"
              d="M3328.438,3761.054a.751.751,0,0,0-.181-.278l-4.178-3.937a2.138,2.138,0,0,0-1.467-.583h-8.632a.646.646,0,0,0-.084,0h-.058a.755.755,0,0,0-.278.055h0a.764.764,0,0,0-.415.415h0a.76.76,0,0,0-.055.278v9.924h-9.924a.761.761,0,0,0-.761.761v.026a.749.749,0,0,0-.044.262l.089,8.627a2.176,2.176,0,0,0,.63,1.514l4.023,4.081h0a2.8,2.8,0,0,0,2.008.848h17.28a2.811,2.811,0,0,0,2.806-2.809v-17.28A2.793,2.793,0,0,0,3328.438,3761.054Zm-5.4-3.1,2.344,2.208h-7.315l-2.386-2.386h6.931a.619.619,0,0,1,.425.181Zm-15.585,12.895-2.425-2.386h8.5l2.386,2.386Zm9.538-1.084-2.386-2.386v-8.525l2.386,2.386Zm-13.023,6.824-.073-7.1,2.409,2.362v7.373l-2.144-2.176a.665.665,0,0,1-.192-.452Zm23.705,3.656a1.284,1.284,0,0,1-1.283,1.283H3309.1a1.283,1.283,0,0,1-1.283-1.283v-7.874h9.928a.761.761,0,0,0,.761-.761v-9.926h7.874a1.283,1.283,0,0,1,1.283,1.283Z"
              transform="translate(-3297.005 -3750.387)"
              fill="#008aff" />
            <path
              id="Path_312"
              data-name="Path 312"
              d="M3287.334,3749.537h0a.76.76,0,0,0,.055-.278h0v-9.924h9.924a.759.759,0,0,0,.48-1.349l-3.7-3.64a.762.762,0,0,0-.69-.446H3282.72a.761.761,0,0,0-.761.761v10.587a.744.744,0,0,0,.013.234v.031a.728.728,0,0,0,.052.152.761.761,0,0,0,.123.187v.016l.016.016h0l3.911,3.91a.753.753,0,0,0,.262.166h0a.74.74,0,0,0,.556,0h0A.763.763,0,0,0,3287.334,3749.537Zm-3.853-13.042,2.386,2.386v8.525l-2.386-2.386Zm9.538-1.081,2.425,2.386h-8.5l-2.386-2.386Z"
              transform="translate(-3281.955 -3733.9)"
              fill="#008aff" />
          </svg>
        </div>
        <div class="col-span-4 flex-wrap flex hidden md:block">
          <HeaderSearchbox></HeaderSearchbox>
        </div>
        <div class="col-span-5 justify-end gap-x-2 flex-wrap flex">
          <HeaderCart></HeaderCart>
          <HeaderRegister></HeaderRegister>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped></style>

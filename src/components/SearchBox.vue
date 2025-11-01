<template>
  <div
    class="bg-[url(../assets/images/searchbg.png)] bg-cover bg-center bg-no-repeat pt-60 lg:py-70 max-w-7xl m-auto mb-20 lg:mb-0"
  >
    <h1 class="visible mb-6 text-center text-white-100 text-display3 lg:invisible">
      每一筆通報，<br />比價很可靠！
    </h1>
    <h1 class="invisible lg:visible lg:mb-6 lg:text-center lg:text-white-100 lg:text-display2">
      每一筆通報，比價很可靠！
    </h1>

    <div class="flex justify-center searchBox">
      <div class="flex items-center w-3xl bg-white-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-icon lucide-search ms-6 me-4"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <p class="py-6 text-fs4">輸入商品名稱關鍵字</p>
      </div>
      <div class="p-6 bg-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-archive-icon lucide-archive"
        >
          <rect width="20" height="5" x="2" y="3" rx="1" />
          <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
          <path d="M10 12h4" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>


<script setup>
</script>



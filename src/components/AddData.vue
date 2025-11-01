<template>
  <div class="flex flex-col mx-3 mb-10 lg:flex-row lg:mb-12 lg:max-w-7xl lg:m-auto">
    <h2 class="mb-3 text-white-100 text-h1 lg:text-display2 lg:w-1/2">累計積分換折扣</h2>
    <p class="text-white-100 text-h6 lg:text-h2 lg:w-1/2">立即新增發票與評價，低價再低價！</p>
  </div>
  <div class="flex flex-col lg:flex-row">
    <div
      class="bg-[url(../assets/images/invoice.png)] bg-cover bg-center bg-no-repeat lg:relative lg:w-1/2"
    >
      <h2 class="text-center text-white-100 text-h1 p-30 lg:text-display2 lg:mb-80">
        發票一張<br />積分入帳<br />折價券輕鬆換
      </h2>
      <RouterLink
        to="/addInvoice"
        class="block py-8 text-center text-black-100 bg-white-100 text-h6 lg:inline-block lg:text-h4 lg:px-35 lg:py-12 lg:w-105 lg:absolute lg:right-1 lg:bottom-1 hover:bg-primary"
        >+ 新增回饋</RouterLink
      >
    </div>
    <div class="relative bg-black lg:w-1/2">
      <h2 class="text-center text-white-100 text-h1 p-30 lg:text-display2">
        分享越多<br />賺越多<br />快來領優惠
      </h2>
      <RouterLink
        to="/addInvoice"
        class="block py-8 text-center text-black-100 bg-white-100 text-h6 lg:inline-block lg:text-h4 lg:px-35 lg:py-12 lg:w-105 lg:absolute lg:right-1 lg:bottom-1 hover:bg-primary"
        >+ 新增發票</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
</style>


<script setup>
</script>
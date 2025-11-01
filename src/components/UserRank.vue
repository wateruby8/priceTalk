 <template>
  <div class="py-25 border-t-1 bg-white-100">
    <div class="p-2 m-auto lg:max-w-7xl">
      <div class="flex lg:justify-between">
        <div>
          <h2 class="mb-3 text-h1 lg:text-display2 text-black-100">貢獻值排行榜</h2>
          <p class="mb-12 text-h6 lg:text-h2">我是情報王-詹姆士・龐德</p>
        </div>
        <div class="lg:bg-black-100 lg:mt-10 lg:h-8">
          <RouterLink
            to="/rank"
            class="hidden text-center lg:inline-block lg:text-center lg:p-8 lg:text-h6 lg:text-white-100 lg:bg-black-100 lg:hover:bg-primary"
            >查看更多</RouterLink
          >
        </div>
      </div>

      <div class="flex flex-col gap-6 mb-6 lg:flex-row lg:items-end lg:gap-0">
        <div class="flex flex-col gap-6 lg:flex-row-reverse lg:items-end lg:gap-0">
          <div class="flex items-end gap-4 lg:flex-col lg:items-center">
            <div class="w-1/2 lg:relative">
              <img src="../assets/images/rank1.png" alt="userno1" class="lg:w-1500" />
              <p
                class="hidden lg:w-10 lg:py-3 lg:text-center lg:block lg:bg-primary lg:text-white-100 lg:text-h6 lg:absolute lg:top-0 lg:right-0"
              >
                {1}
              </p>
            </div>

            <div class="lg:flex lg:gap-10">
              <p class="w-12 py-3 mb-2 text-center bg-primary text-white-100 text-h6 lg:hidden">
                {1}
              </p>
              <p class="mb-2 text-h4 text-black-100 lg:text-h5">Water Moore</p>
              <p class="text-h6 text-black-100 lg:text-h5">Point:1101</p>
            </div>
          </div>

          <div class="flex items-end gap-4 lg:flex-col lg:items-center">
            <div class="w-1/2 lg:relative">
              <img src="../assets/images/rank2.png" alt="userno1" class="lg:w-1000" />
              <p
                class="hidden lg:w-10 lg:py-3 lg:text-center lg:block lg:bg-black-100 lg:text-white-100 lg:text-h6 lg:absolute lg:top-0 lg:right-0"
              >
                {2}
              </p>
            </div>
            <div class="lg:flex lg:gap-10">
              <p class="w-12 py-3 mb-2 text-center bg-black-100 text-white-100 text-h6 lg:hidden">
                {2}
              </p>
              <p class="mb-2 text-h4 text-black-100 lg:text-h5">James Bond</p>
              <p class="text-h6 text-black-100 lg:text-h5">Point:999</p>
            </div>
          </div>
        </div>

        <div class="flex items-end gap-4 lg:flex-col lg:items-center">
          <div class="w-1/2 lg:relative">
            <img src="../assets/images/rank3.png" alt="userno1" class="lg:w-1000" />

            <p
              class="hidden lg:w-10 lg:py-3 lg:text-center lg:block lg:bg-black-100 lg:text-white-100 lg:text-h6 lg:absolute lg:top-0 lg:right-0"
            >
              {3}
            </p>
          </div>
          <div class="lg:flex lg:gap-10">
            <p class="w-12 py-3 mb-2 text-center bg-black-100 text-white-100 text-h6 lg:hidden">
              {3}
            </p>
            <p class="mb-2 text-h4 text-black-100 lg:text-h5">Sean Connery</p>
            <p class="text-h6 text-black-100 lg:text-h5">Point:888</p>
          </div>
        </div>
      </div>

      <RouterLink
        to="/rank"
        class="block py-6 mb-10 text-center bg-black-100 text-h6 text-white-100 lg:hidden"
        >查看更多</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
</style>


<script setup>
</script>
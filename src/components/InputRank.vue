<template>
  <div class="m-auto max-w-7xl">
    <h2 class="text-white-100 text-display2">不只最低價，更要合理價</h2>
    <p class="text-white-100 text-h2">買家情報,呈現最真實的價格</p>
    <swiper
      :slides-per-view="2.1"
      :space-between="150"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="text-white">
        <div>
          <img src="..\assets\images\itemBike.png" alt="bike" />
          <div class="p-6 bg-white-100">
            <h3 class="mb-4 text-h2 text-black-100">越野腳踏車</h3>
            <h4 class="mb-4 text-h6 text-black-50">
              <span class="text-black-100">510</span> 商家販售 /
              <span class="text-black-100">120</span> 筆情報紀錄
            </h4>
            <div class="flex justify-between mb-2.5">
              <p class="text-tiny text-black-100">$ 8k</p>
              <p class="text-tiny text-black-100">$ 21.9k</p>
            </div>
            <div class="flex">
              <div class="bar bg-primary-10 h-2 w-2/20"></div>
              <div class="bar bg-primary-15 h-2 w-6/20"></div>
              <div class="bar bg-primary-30 h-2 w-1/20"></div>
              <div class="bar bg-primary h-2 w-2/20"></div>
              <div class="bar bg-primary-30 h-2 w-3/20"></div>
              <div class="bar bg-primary-15 h-2 w-2/20"></div>
              <div class="bar bg-primary-10 h-2 w-4/20"></div>
            </div>
          </div>
        </div>
      </swiper-slide>

      <swiper-slide class="text-white"
        ><div>
          <img src="..\assets\images\itemCoffeeMachine.png" alt="coffee machine" />
          <div class="p-6 bg-white-100">
            <h3 class="mb-4 text-h2 text-black-100">咖啡機</h3>
            <h4 class="mb-4 text-h6 text-black-50">
              <span class="text-black-100">1102</span> 商家販售 /
              <span class="text-black-100">600</span> 筆情報紀錄
            </h4>
            <div class="flex justify-between mb-2.5">
              <p class="text-tiny text-black-100">$ 3k</p>
              <p class="text-tiny text-black-100">$ 499k</p>
            </div>
            <div class="flex">
              <div class="bar bg-primary-10 h-2 w-2/20"></div>
              <div class="bar bg-primary-15 h-2 w-6/20"></div>
              <div class="bar bg-primary-30 h-2 w-1/20"></div>
              <div class="bar bg-primary h-2 w-2/20"></div>
              <div class="bar bg-primary-30 h-2 w-3/20"></div>
              <div class="bar bg-primary-15 h-2 w-2/20"></div>
              <div class="bar bg-primary-10 h-2 w-4/20"></div>
            </div>
          </div></div
      ></swiper-slide>

      <swiper-slide class="text-white"
        ><div>
          <img src="..\assets\images\itemGlasses.png" alt="glasses" />
          <div class="p-6 bg-white-100">
            <h3 class="mb-4 text-h2 text-black-100">智慧眼鏡(Smart Glasses)</h3>
            <h4 class="mb-4 text-h6 text-black-50">
              <span class="text-black-100">322</span> 商家販售 /
              <span class="text-black-100">120</span> 筆情報紀錄
            </h4>
            <div class="flex justify-between mb-2.5">
              <p class="text-tiny text-black-100">$ 10k</p>
              <p class="text-tiny text-black-100">$ 40k</p>
            </div>
            <div class="flex">
              <div class="bar bg-primary-10 h-2 w-2/20"></div>
              <div class="bar bg-primary-15 h-2 w-6/20"></div>
              <div class="bar bg-primary-30 h-2 w-1/20"></div>
              <div class="bar bg-primary h-2 w-2/20"></div>
              <div class="bar bg-primary-30 h-2 w-3/20"></div>
              <div class="bar bg-primary-15 h-2 w-2/20"></div>
              <div class="bar bg-primary-10 h-2 w-4/20"></div>
            </div>
          </div></div
      ></swiper-slide>

      <swiper-slide class="text-white"
        ><div>
          <img src="..\assets\images\itemCake.png" alt="cake" />
          <div class="p-6 bg-white-100">
            <h3 class="mb-4 text-h2 text-black-100">生乳捲</h3>
            <h4 class="mb-4 text-h6 text-black-50">
              <span class="text-black-100">100</span> 商家販售 /
              <span class="text-black-100">650</span> 筆情報紀錄
            </h4>
            <div class="flex justify-between mb-2.5">
              <p class="text-tiny text-black-100">$ 100</p>
              <p class="text-tiny text-black-100">$ 599</p>
            </div>
            <div class="flex">
              <div class="bar bg-primary-10 h-2 w-2/20"></div>
              <div class="bar bg-primary-15 h-2 w-6/20"></div>
              <div class="bar bg-primary-30 h-2 w-1/20"></div>
              <div class="bar bg-primary h-2 w-2/20"></div>
              <div class="bar bg-primary-30 h-2 w-3/20"></div>
              <div class="bar bg-primary-15 h-2 w-2/20"></div>
              <div class="bar bg-primary-10 h-2 w-4/20"></div>
            </div>
          </div></div
      ></swiper-slide>

      <swiper-slide class="text-white"
        ><div>
          <img src="..\assets\images\itemPerfume.png" alt="perfume" />
          <div class="p-6 bg-white-100">
            <h3 class="mb-4 text-h2 text-black-100">淡香水(50ml)</h3>
            <h4 class="mb-4 text-h6 text-black-50">
              <span class="text-black-100">175</span> 商家販售 /
              <span class="text-black-100">1,955</span> 筆情報紀錄
            </h4>
            <div class="flex justify-between mb-2.5">
              <p class="text-tiny text-black-100">$ 15k</p>
              <p class="text-tiny text-black-100">$ 68.7k</p>
            </div>
            <div class="flex">
              <div class="bar bg-primary-10 h-2 w-2/20"></div>
              <div class="bar bg-primary-15 h-2 w-6/20"></div>
              <div class="bar bg-primary-30 h-2 w-1/20"></div>
              <div class="bar bg-primary h-2 w-2/20"></div>
              <div class="bar bg-primary-30 h-2 w-3/20"></div>
              <div class="bar bg-primary-15 h-2 w-2/20"></div>
              <div class="bar bg-primary-10 h-2 w-4/20"></div>
            </div>
          </div></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
</style>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>
<template>
  <h2 class="text-white-100">不只最低價，更要合理價</h2>
  <p class="text-white-100">買家數據錄入,呈現真實合理價位</p>
  <swiper
    :slides-per-view="2.1"
    :space-between="30"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="text-white">
      <div>
        <img src="..\assets\images\itemBike.png" alt="bike" />
      </div>
    </swiper-slide>

    <swiper-slide class="text-white"
      ><div>
        <img src="..\assets\images\itemCoffeeMachine.png" alt="coffee machine" /></div
    ></swiper-slide>
    <swiper-slide class="text-white"
      ><div>
        <img src="..\assets\images\itemGlasses.png" alt="glasses" /></div
    ></swiper-slide>
    <swiper-slide class="text-white"
      ><div>
        <img src="..\assets\images\itemCake.png" alt="cake" /></div
    ></swiper-slide>
    <swiper-slide class="text-white"
      ><div>
        <img src="..\assets\images\itemPerfume.png" alt="perfume" /></div
    ></swiper-slide>
  </swiper>
</template>

<style scoped>
</style>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>
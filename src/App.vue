<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>

<template>
  <nav class="delnav pb-10">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/searchResult">SearchResult</RouterLink>
    <RouterLink to="/searchDetail">SearchDetail</RouterLink>
    <RouterLink to="/rank">Rank</RouterLink>
    <RouterLink to="/addInvoice">AddInvoice</RouterLink>
    <RouterLink to="/service">Service</RouterLink>
  </nav>

  <header class="text-white">header</header>

  <RouterView />

  <footer class="bg-white-100">
    <div class="m-auto max-w-7xl py-50 flex justify-between">
      <div class="flex flex-col gap-y-50">
        <img src="../public/Logo.png" alt="logo" class="w-20" />
        <div class="flex border-1 border-black-20">
          <img
            src="../src/assets/images/Facebook.png"
            alt="fb"
            class="p-2 border-r-1 border-black-20"
          />
          <img
            src="../src/assets/images/Instagram.png"
            alt="ig"
            class="p-2 border-r-1 border-black-20"
          />
          <img src="../src/assets/images/Line.png" alt="line" class="p-2" />
        </div>
      </div>
      <div class="flex flex-col gap-y-10">
        <RouterLink to="/" class="text-h4 text-black-100">關於我們</RouterLink>
        <RouterLink to="/" class="text-h4 text-black-100">商業合作</RouterLink>
        <RouterLink to="/register" class="text-h4 text-black-100">工作機會</RouterLink>
        <RouterLink to="/searchResult" class="text-h4 text-black-100">常見問題</RouterLink>
        <RouterLink to="/searchDetail" class="text-h4 text-black-100">意見反饋</RouterLink>
        <RouterLink to="/rank" class="text-h4 text-black-100">服務條款</RouterLink>
        <RouterLink to="/addInvoice" class="text-h4 text-black-100">隱私政策</RouterLink>
      </div>
      <div></div>
      <div class="flex flex-col text-black-100 text-right gap-y-16">
        <div>
          <p class="font-[Merriweather] font-bold italic text-2xl leading-[1.5]">EMAIL</p>
          <p class="text-fs4">PriceTalk2025@pricetalk.com</p>
        </div>
        <div>
          <p class="font-[Merriweather] font-bold italic text-2xl leading-[1.5]">PHONE</p>
          <p class="text-fs4">02-1234-5678</p>
        </div>
        <div>
          <p class="font-[Merriweather] font-bold italic text-2xl leading-[1.5]">ADDRESS</p>
          <p class="text-fs4">100台北市中正區忠孝東路一段123號8樓</p>
        </div>
      </div>
    </div>
    <div class="m-auto max-w-7xl flex mb-23 justify-between">
      <div class="flex flex-col">
        <p class="text-h4 text-black-100 mb-6">點擊訂閱 PriceTalk 電子報，掌握每周比價情報</p>
        <div class="flex">
          <input
            type="checkbox"
            name="agreePaper"
            id="agreePaper"
            class="me-4 border-2 border-black-50 w-6"
          />
          <p class="text-fs6 text-black-50">
            同意 PriceTalk
            <RouterLink to="/service" class="text-black-100 border-b-1"
              >使用者條款與隱私權政策</RouterLink
            >，願意收到各類電子報及最新消息
          </p>
        </div>
      </div>
      <div class="flex">
        <input type="email" placeholder="123@hotmail.com" class="border-1 border-black-20 p-6" />
        <button type="submit" class="bg-primary text-white-100 text-h6 px-8 py-3">訂閱</button>
      </div>
    </div>

    <p class="text-fs6 text-black-50 text-center pb-10">
      © PriceTalk 2025　本網站僅供作品參考，並非真實營運販售
    </p>
  </footer>
</template>

<style scoped>
.delnav {
  width: 100%;
  text-align: center;
  line-height: 2;
}
.delnav a:hover {
  background-color: blue;
}
.delnav a.router-link-exact-active {
  color: yellow;
}

.delnav a.router-link-exact-active:hover {
  background-color: blue;
}

.delnav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid white;
  color: white;
}

.delnav a:first-of-type {
  border: 0;
}
</style>

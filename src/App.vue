<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>

<template>
  <!-- <nav class="pb-10 delnav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/searchResult">SearchResult</RouterLink>
    <RouterLink to="/searchDetail">SearchDetail</RouterLink>
    <RouterLink to="/rank">Rank</RouterLink>
    <RouterLink to="/addInvoice">AddInvoice</RouterLink>
    <RouterLink to="/service">Service</RouterLink>
  </nav> -->

  <header class="flex items-center justify-between text-white">
    <RouterLink to="/"><img src="../public/Logo.png" alt="logo" /></RouterLink>

    <!-- <div class="flex items-center invisible lg:visible">
      <button type="button" class="p-10 hover:bg-primary">
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
          class="lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </button>

      <button type="button" class="p-10 hover:bg-primary">
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
          class="lucide lucide-user-icon lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>
      <button type="button" class="text-h6 py-12.5 px-10 hover:bg-primary">{MENU}</button>
    </div> -->

    <div class="flex items-center visible">
      <button type="button" class="p-12 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </button>

      <button type="button" class="p-12 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-user-icon lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>

      <button type="button" class="hidden p-12 lg:block">
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
          class="lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
      </button>

      <button type="button" class="hidden p-12 lg:block">
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
          class="lucide lucide-user-icon lucide-user"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>

      <button type="button" class="px-6 px-8 py-12 text-h6 lg:">{MENU}</button>
    </div>
  </header>

  <RouterView />

  <footer class="p-2 bg-white-100">
    <div class="flex flex-col justify-between py-25 lg:max-w-7xl lg:py-50 lg:flex-row lg:m-auto">
      <div class="flex flex-row justify-between mb-15 lg:flex-col lg:gap-y-50">
        <img src="../public/Logo.png" alt="logo" class="w-10 lg:w-20 bg-primary" />
        <div class="flex w-1/2 border-black-20">
          <img
            src="../src/assets/images/Facebook.png"
            alt="fb"
            class="inline-block p-2 border-r-1 border-l-1 border-black-20 border-y-1"
          />
          <img
            src="../src/assets/images/Instagram.png"
            alt="ig"
            class="inline-block p-2 border-r-1 border-black-20 border-y-1"
          />
          <img
            src="../src/assets/images/Line.png"
            alt="line"
            class="inline-block p-2 border-r-1 border-black-20 border-y-1"
          />
        </div>
      </div>

      <div class="flex flex-row flex-wrap mb-20 lg:flex-col gap-y-10">
        <RouterLink to="/" class="w-1/2 text-h4 text-black-100 lg:w-1/1">關於我們</RouterLink>
        <RouterLink to="/" class="text-h4 text-black-100">商業合作</RouterLink>
        <RouterLink to="/register" class="w-1/2 text-h4 text-black-100 lg:w-1/1"
          >工作機會</RouterLink
        >
        <RouterLink to="/searchResult" class="text-h4 text-black-100">常見問題</RouterLink>
        <RouterLink to="/searchDetail" class="w-1/2 text-h4 text-black-100 lg:w-1/1"
          >意見反饋</RouterLink
        >
        <RouterLink to="/rank" class="text-h4 text-black-100">服務條款</RouterLink>
        <RouterLink to="/addInvoice" class="w-1/2 text-h4 text-black-100 lg:w-1/1"
          >隱私政策</RouterLink
        >
      </div>

      <div class="flex flex-col text-center lg:text-right text-black-100 gap-y-6 lg:gap-y-16">
        <div>
          <p class="font-[Merriweather] text-xl font-bold italic lg:text-2xl leading-[1.5]">
            EMAIL
          </p>
          <p class="text-fs6 lg:text-fs4">PriceTalk2025@pricetalk.com</p>
        </div>
        <div>
          <p class="font-[Merriweather] text-xl font-bold italic lg:text-2xl leading-[1.5]">
            PHONE
          </p>
          <p class="text-fs6 lg:text-fs4">02-1234-5678</p>
        </div>
        <div>
          <p class="font-[Merriweather] text-xl font-bold italic lg:text-2xl leading-[1.5]">
            ADDRESS
          </p>
          <p class="text-fs6 lg:text-fs4">100台北市中正區忠孝東路一段123號8樓</p>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col items-center mb-6 lg:flex-row lg:justify-between lg:m-auto lg:max-w-7xl lg:mb-15"
    >
      <div class="flex flex-col mb-6">
        <p class="mb-6 text-h4 text-black-100">點擊訂閱 PriceTalk 電子報，掌握每週比價情報</p>
        <div class="flex">
          <input
            type="checkbox"
            name="agreePaper"
            id="agreePaper"
            class="w-6 border-2 me-4 border-black-50"
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
        <input type="email" placeholder="123@hotmail.com" class="p-6 border-1 border-black-20" />
        <button type="submit" class="px-8 py-3 bg-primary text-white-100 text-h6">訂閱</button>
      </div>
    </div>

    <p class="pb-10 text-center text-fs6 text-black-50">
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

<template>
  <div class="p-2 m-auto mb-20 max-w-7xl">
    <h2 class="mb-6 text-white-100 text-h1 lg:text-display2 lg:mb-6">熱門搜索商品比價</h2>

    <p class="mb-10 text-white-100 text-h6 lg:text-h2 lg:mb-15">商家賣價比一比</p>

    <!-- 待修改 -->
    <div class="hidden lg:block">
      <swiper
        :slides-per-view="2.5"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemCake.png" alt="cake" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">北海道生乳捲</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\cakeShopRamo.png" alt="cakeShopRamo" />
                  </div>
                  <p class="text-h6 text-black-100">$405</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\cakeShopApirt.png" alt="cakeShopApirt" />
                  </div>
                  <p class="text-h6 text-black-100">$405</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\cakeShopDnc.png" alt="cakeShopDnc" />
                  </div>
                  <p class="text-h6 text-black-100">$450</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.8 ． 100 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemPerfume.png" alt="Perfume" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">香水</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\perfumeBoc.png" alt="perfumeBoc" />
                  </div>
                  <p class="text-h6 text-black-100">$5,599</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\perfumeDri.png" alt="perfumeDri" />
                  </div>
                  <p class="text-h6 text-black-100">$6,630</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\perfumeAnv.png" alt="perfumeAnv" />
                  </div>
                  <p class="text-h6 text-black-100">$6,999</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.9 ． 200 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemPhone.png" alt="phone" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">智慧型手機</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\phoneBis.png" alt="phoneBis" />
                  </div>
                  <p class="text-h6 text-black-100">$38,380</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\phoneLw.png" alt="phoneLw" />
                  </div>
                  <p class="text-h6 text-black-100">$38,599</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\phoneJb.png" alt="phoneJb" />
                  </div>
                  <p class="text-h6 text-black-100">$39,159</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.3 ． 9,999+ <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemComic.png" alt="comic" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">經典漫畫</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\comicG.png" alt="comicG" />
                  </div>
                  <p class="text-h6 text-black-100">$300</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\comicNcc.png" alt="comicNcc" />
                  </div>
                  <p class="text-h6 text-black-100">$305</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\comicGrace.png" alt="comicGrace" />
                  </div>
                  <p class="text-h6 text-black-100">$306</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.8 ． 2,807 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemBike.png" alt="bike" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">都會探險自行車</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\bikeCar.png" alt="bikeCar" />
                  </div>
                  <p class="text-h6 text-black-100">$8,287</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\bikeWheel.png" alt="bikeWheel" />
                  </div>
                  <p class="text-h6 text-black-100">$8,360</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\bikeAgri.png" alt="bikeAgri" />
                  </div>
                  <p class="text-h6 text-black-100">$8,389</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.1 ． 51 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="block lg:hidden">
      <swiper
        :slides-per-view="1.3"
        :space-between="30"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemCake.png" alt="cake" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">北海道生乳捲</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\cakeShopRamo.png" alt="cakeShopRamo" />
                  </div>
                  <p class="text-h6 text-black-100">$405</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\cakeShopApirt.png" alt="cakeShopApirt" />
                  </div>
                  <p class="text-h6 text-black-100">$405</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\cakeShopDnc.png" alt="cakeShopDnc" />
                  </div>
                  <p class="text-h6 text-black-100">$450</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.8 ． 100 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemPerfume.png" alt="Perfume" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">香水</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\perfumeBoc.png" alt="perfumeBoc" />
                  </div>
                  <p class="text-h6 text-black-100">$5,599</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\perfumeDri.png" alt="perfumeDri" />
                  </div>
                  <p class="text-h6 text-black-100">$6,630</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\perfumeAnv.png" alt="perfumeAnv" />
                  </div>
                  <p class="text-h6 text-black-100">$6,999</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.9 ． 200 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemPhone.png" alt="phone" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">智慧型手機</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\phoneBis.png" alt="phoneBis" />
                  </div>
                  <p class="text-h6 text-black-100">$38,380</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\phoneLw.png" alt="phoneLw" />
                  </div>
                  <p class="text-h6 text-black-100">$38,599</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\phoneJb.png" alt="phoneJb" />
                  </div>
                  <p class="text-h6 text-black-100">$39,159</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.3 ． 9,999+ <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemComic.png" alt="comic" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">經典漫畫</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\comicG.png" alt="comicG" />
                  </div>
                  <p class="text-h6 text-black-100">$300</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\comicNcc.png" alt="comicNcc" />
                  </div>
                  <p class="text-h6 text-black-100">$305</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\comicGrace.png" alt="comicGrace" />
                  </div>
                  <p class="text-h6 text-black-100">$306</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.8 ． 2,807 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide class="text-white">
          <div class="flex flex-col">
            <img src="..\assets\images\itemBike.png" alt="bike" />
            <div class="p-6 bg-white-100">
              <h3 class="mb-6 text-h2 text-black-100">都會探險自行車</h3>

              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-white-100 bg-primary px-3 py-1">1</p>
                    <img src="..\assets\images\bikeCar.png" alt="bikeCar" />
                  </div>
                  <p class="text-h6 text-black-100">$8,287</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">2</p>
                    <img src="..\assets\images\bikeWheel.png" alt="bikeWheel" />
                  </div>
                  <p class="text-h6 text-black-100">$8,360</p>
                </div>
              </div>
              <div class="border-b-1 border-black-20 border-dashed pb-2 mb-4">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row gap-2">
                    <p class="text-merriweather italic text-black-100 bg-black-20 px-3 py-1">3</p>
                    <img src="..\assets\images\bikeAgri.png" alt="bikeAgri" />
                  </div>
                  <p class="text-h6 text-black-100">$8,389</p>
                </div>
              </div>

              <div class="pb-2">
                <div class="flex justify-between items-center">
                  <div class="flex flex-row items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#FF6A41"
                      stroke="#FF6A41"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-star-icon lucide-star inline"
                    >
                      <path
                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                      />
                    </svg>
                    <p class="text-h6 text-black-100">
                      4.1 ． 51 <span class="text-black-50">條評價</span>
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-move-right-icon lucide-move-right"
                  >
                    <path d="M18 8L22 12L18 16" />
                    <path d="M2 12H22" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
</style>


<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
</script>
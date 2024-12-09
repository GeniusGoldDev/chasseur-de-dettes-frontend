<template>
  <div class="container mx-auto lg:mt-[30px]">
    <!-- Router -->
    <div class="container mx-auto py-4 lg:px-[150px] lg:mt-[30px] px-4">
      <div class="flex flex-wrap items-center">
        <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">Accueil</p>
        <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
        <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">Annuaire</p>
        <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
        <p class="text-sm text-black font-family[metropolis] mr-2 lg:text-base">Membres Actifs</p>
      </div>
      <div class="flex justify-between lg:w-[403px] items-center text-lg lg:text-2xl font-family[metropolis] font-extrabold mt-4 lg:mt-6">
          Membres Actifs (ves)
        <div class="mr-10 rounded-[20px] flex items-center justify-center text-[white] text-[14px] w-[30px] h-[30px] bg-[#43BD74]">
          20
        </div>

      </div>
    </div>

    <div class="lg:mx-[150px]">
      <div class="flex flex-wrap items-center justify-between gap-3 bg-[#F8F8FB] lg:flex-nowrap">
        <!-- Search Section -->
        <div class="flex items-center hidden lg:block justify-between gap-3 bg-[#F8F8FB] px-5 py-3 rounded-full">
          <!-- Search Input -->
          <div class="relative">
            <input
              type="text"
              class="w-full border-none pl-4 pr-[50px] py-2 bg-white rounded-full focus:ring-2 focus:ring-[#A577F0] placeholder:text-gray-400 text-sm lg:text-base"
              placeholder="Mot clé"
            />
            <button
              class="absolute right-[0] border-[white] border-[2px] top-1/2 -translate-y-1/2 bg-gradient-to-br from-[#A577F0] to-[#6F4A9F] text-white rounded-full h-[40px] w-[40px] flex justify-center items-center"
            >
              <img class="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" src="../assets/images/mynaui_search.png" alt="Search Icon" />
            </button>
          </div>
        </div>
  
        <!-- Right Section -->
        <div class="px-2 flex items-center justify-between w-full">
          <!-- Dropdown -->
          <div class="mr-2 circle w-[46px] h-[46px] rounded-full flex items-center justify-center bg-[#A577F0] block lg:hidden">
            <img src="../assets/images/mynaui_search.png" alt="">
          </div>
          <!-- Input Container -->
          <div class="mr-2 relative flex-grow flex justify-end">
            <input
              type="text"
              class="w-[150px] lg:w-[300px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-[#A577F0] focus:border-[#A577F0] lg:placeholder:text-gray-400 text-sm lg:text-base"
              placeholder="Toutes catégories"
            />
            <a href="">
              <img class="absolute right-3 top-[30%] h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" src="../assets/images/mingcute_down-line.png" alt="Dropdown Icon" />
            </a>
          </div>
          <!-- Icons -->
          <button class="mr-2 bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center opacity-[90%] hover:opacity-[100%]">
            <img class="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" src="../assets/images/Frame 50.png" alt="Icon 1" />
          </button>
          <button class="mr-2 bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center opacity-[56%] hover:opacity-[90%]">
            <img class="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" src="../assets/images/fluent_list-bar-20-filled.png" alt="Icon 2" />
          </button>
          <NuxtLink to="/TLocation" class="mr-2 bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center opacity-[56%] hover:opacity-[90%]">
            <img class="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" src="../assets/images/solar_map-point-wave-bold.png" alt="Icon 3" />
          </NuxtLink>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
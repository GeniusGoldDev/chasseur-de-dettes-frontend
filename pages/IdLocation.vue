<template>

  <div class="container mx-auto py-4 lg:px-[150px] lg:mt-[30px] px-4">
    <!-- router -->
    <div class="flex flex-wrap items-center">
      <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">Accueil</p>
      <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
      <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">Toutes catégories</p>
      <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
      <p class="text-sm text-black font-family[metropolis] mr-2 lg:text-base">Formation - Enseignement</p>
    </div>
    <!-- step_1 -->
    <div class="bg-white rounded-[30px] px-[46px] py-[46px] mt-[25px]">
      <p class="lg:text-[24px] font-extrabold font-family[metropolis]">Institut Français du Credit Management - IFCM</p>
    
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px]">
        
        <!-- Left section -->
        <div class="flex flex-col md:flex-row gap-[20px]">
          <div class="flex items-center">
            <img src="../assets/images/Frame 3740.png" alt="">  
            <p class="text-[12px] font-family[metropolis] mx-5">Visitez le site web</p>
          </div>
          <div class="flex items-center">
            <img src="../assets/images/Frame 3741.png" alt="">  
            <p class="text-[12px] font-family[metropolis] ml-5">6391 Elgin St. Celina, Delaware 10299</p>
          </div>
        </div>
        
        <!-- Right section (buttons) -->
        <div class="flex flex-col md:flex-row justify-end gap-[10px]">
          <ul class="flex">
            <li>
              <a href="" class="hover:bg-[#663da8] w-[200px] text-white bg-[#A577F0] text-[14px] px-5 py-2 flex rounded-[30px] items-center justify-center">
                Contacter l’entreprise
              </a>
            </li>
            <li class="ml-[10px]">
              <a href="" class="w-10 h-10 hover:bg-[#A577F0] bg-[#FAF6FE] flex rounded-[100%] items-center justify-center">
                <img class="" src="../assets/images/solar_heart-outline.png" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- step_2 -->
    <div class="mb-10 flex flex-col lg:flex-row mt-[30px] gap-4">

      <!-- Left Section -->
      <div class="w-full lg:w-[65%] border-[20px] bg-white border-[white] rounded-[30px]">
        <!-- Image Section -->
        <div class="">
          <img class="w-full" src="../assets/images/Rectangle _2.png" alt="">
        </div>

        <!-- Grid Section -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between mt-4">
          <!-- First Card -->
          <div class="relative rounded-[30px] overflow-hidden">
            <img class="z-[20] w-full" src="../assets/images/Rectangle 8.png" alt="">
            <img class="absolute z-[50] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="../assets/images/iconamoon_eye-off-fill.png" alt="">
            <a href="" class="w-[170px] rounded-[30px] bg-[#FFFFFF33] text-[12px] text-[white] font-family[metropolis] py-2 px-3 z-[50] absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Devenir membre pour voir
            </a>
          </div>
          <!-- Second Card -->
          <div class="relative rounded-[30px] overflow-hidden">
            <img class="z-[20] w-full" src="../assets/images/Rectangle 8.png" alt="">
            <img class="absolute z-[50] top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="../assets/images/iconamoon_eye-off-fill.png" alt="">
            <a href="" class="w-[170px] rounded-[30px] bg-[#FFFFFF33] text-[12px] text-[white] font-family[metropolis] py-2 px-3 z-[50] absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Devenir membre pour voir
            </a>
          </div>
        </div>

        <!-- Description Section -->
        <div class="px-[33px] py-[29px] mt-[55px] border-[1px] border-[#55535314] rounded-[30px]">
          <p class="text-[16px] font-family[metopolis] font-extrabold">Description</p>
          <p class="mt-[24px] text-[12px] font-family[metopolis]">
            L’IFCM est un institut privé de conseil et de formation intervenant dans différents domaines liés au credit management et au recouvrement de créances
          </p>
        </div>

        <!-- Additional Section -->
        <div class="px-[33px] py-[29px] mt-[18px] border-[1px] border-[#55535314] rounded-[30px]">
          <p class="text-[16px] font-family[metopolis] font-extrabold">FORMATION – ENSEIGNEMENT</p>
          <p class="mt-[24px] text-[12px] font-family[metopolis]">
            Formation en présentiel, Formation en Distanciel, Webinair interactif, Webinair Live, National, International, Ouvrage, Publication, QUALIOPI
          </p>
        </div>
      </div>

      <!-- Right Section (Placeholder for Future Content) -->
      <div class="w-full lg:w-[35%] space-y-5">
        <!-- Map Section -->
        <div class="w-full px-[20px] py-[20px] bg-white rounded-[30px]">
          <div class="relative">
            <img class="w-full rounded-[20px]" src="../assets/images/Rectangle 9.png" alt="">
            <a href="#" class="flex items-center justify-center absolute w-[170px] rounded-[30px] bg-[#00000070] text-[12px] text-white py-2 px-3 z-[50] top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img class="mr-2" src="../assets/images/fluent_location-20-filled.png" alt="">
              Voir la carte
            </a>
            <a href="#" class="mt-2 flex items-center justify-center absolute w-[120px] rounded-[30px] bg-[#00000070] text-[12px] text-white py-2 px-3 z-[50] top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img class="mr-2" src="../assets/images/ic_outline-mode-of-travel.png" alt="">
              Itinéraire
            </a>
          </div>
          <div class="my-[22px] flex justify-center items-center">
            <img class="mr-2" src="../assets/images/Frame 3741.png" alt="">
            <p class="text-[12px] font-family[metropolis] text-center">6391 Elgin St. Celina, Delaware 10299</p>
          </div>
          <a href="#" class="hover:bg-[#A577F0] hover:text-white flex items-center justify-center w-full py-4 border-[1px] rounded-[20px]">
            <img class="mr-2" src="../assets/images/ic_round-call.png" alt="">
            <p class="text-[12px] font-family[metropolis]">(603) 555-0123</p>
          </a>
        </div>

        <!-- Availability Section -->
        <div class="w-full px-[20px] py-[20px] bg-white rounded-[30px]">
          <div class="flex items-center text-[16px] font-family[metropolis] font-extrabold">
            <img class="mr-3" src="../assets/images/lets-icons_time-atack.png" alt="">
            Disponibilité
          </div>
          <div class="mt-5 space-y-4">
            <!-- Day Rows -->
            <div class="flex justify-between">
              <p class="text-[14px] font-family[metropolis]">Lundi</p>
              <p class="text-[14px] font-family[metropolis] opacity-50 hover:opacity-[100] hover:bg-[#0A0908] hover:text-white hover:rounded-[10px] hover:py-1 hover:px-2">09:00 AM - 18:00 PM</p>
            </div>
            <div class="flex justify-between">
              <p class="text-[14px] font-family[metropolis]">Mardi</p>
              <p class="text-[14px] font-family[metropolis] opacity-50 hover:opacity-[100] hover:bg-[#0A0908] hover:text-white hover:rounded-[10px] hover:py-1 hover:px-2">09:00 AM - 18:00 PM</p>
            </div>
            <div class="flex justify-between">
              <p class="text-[14px] font-family[metropolis]">Mercredi</p>
              <p class="text-[14px] font-family[metropolis] opacity-50 hover:opacity-[100] hover:bg-[#0A0908] hover:text-white hover:rounded-[10px] hover:py-1 hover:px-2">09:00 AM - 18:00 PM</p>
            </div>
            <div class="flex justify-between">
              <p class="text-[14px] font-family[metropolis]">Jeudi</p>
              <p class="text-[14px] font-family[metropolis] opacity-50 hover:opacity-[100] hover:bg-[#0A0908] hover:text-white hover:rounded-[10px] hover:py-1 hover:px-2">09:00 AM - 18:00 PM</p>
            </div>
            <!-- Repeat similar rows for other days -->
            <div class="flex justify-between">
              <p class="text-[14px] font-family[metropolis]">Samedi</p>
              <p class="text-[14px] text-[#FF0000] font-family[metropolis] hover:bg-[#0A0908] hover:text-white hover:rounded-[10px] hover:py-1 hover:px-2">Fermé</p>
            </div>
            <div class="flex justify-between">
              <p class="text-[14px] font-family[metropolis]">Dimanche</p>
              <p class="text-[14px] text-[#FF0000] font-family[metropolis] hover:bg-[#0A0908] hover:text-white hover:rounded-[10px] hover:py-1 hover:px-2">Fermé</p>
            </div>
          </div>
        </div>

        <!-- Work Here Section -->
        <div class="w-full px-[20px] py-[20px] bg-white rounded-[30px]">
          <p class="text-[16px] font-family[metropolis] font-extrabold">Travailler ici?</p>
          <p class="mt-2 text-[14px] font-family[metropolis] opacity-50">Réclamez cette page pour votre entreprise.</p>
          <a href="#" class="mt-5 w-[50%] mx-auto block py-2 border-[1px] text-center text-[12px] font-extrabold rounded-[20px] hover:bg-[#A577F0] hover:text-white">
            En savoir plus
          </a>
        </div>

        <!-- Join Team Section -->
        <div class="relative overflow-hidden bg-[#A577F0] pt-[26px] pl-[25px] w-full rounded-[30px] sm:rounded-[40px]">
          <img class="" src="../assets/images/Frame 3738.png" alt="Background Image">
          <p class="text-white text-[20px] sm:text-[26px] font-family[metropolis] font-extrabold mt-4">
            Rejoignez<br> une équipe <br>qui gagne !
          </p>
          <button class="my-5 px-6 py-2.5 w-[170px] bg-[#5D32A3] hover:bg-[#A577F0] text-white rounded-full">
            Nous-rejoindre
          </button>
          <img class="absolute top-0 lg:right-[-25%] right-[-25%] h-full w-full lg:w-full lg:h-[100%]" src="../assets/images/man1.png" alt="Man Image">
        </div>
      </div>

    </div>
    <!-- step_3 -->
    <Recommend />
  </div>
  
  </template>
  
  <style>
      
  </style>
  
  <script>
      import Recommend from "~/components/Recommend.vue"
      import Teach from "~/components/Teach.vue"
  </script>
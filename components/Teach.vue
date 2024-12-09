<template>
    <div class="container mx-auto py-4 lg:px-[150px] lg:mt-[30px]">
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
                placeholder="Le plus pertinent"
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
  
      <!-- Cards Section -->
      <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[60px]">
        <div
          v-for="(card, index) in sortedCards"
          :key="index"
          class="w-full"
          :class="{ 'border-[20px] border-white rounded-tl-[40px] rounded-br-[40px] rounded-[20px] px-[5px] bg-white': index !== 2 }"
        >
          <!-- 3rd Card: Display Only the Image -->
          <div v-if="index === 2">
            <div class="relative bg-[#A577F0] pt-[26px] pl-[25px] w-full sm:w-[370px] overflow-hidden rounded-[20px] sm:rounded-tr-[40px] sm:rounded-tl-[40px] sm:rounded-br-[40px] sm:rounded-bl-[40px]">
                <!-- Background Image -->
                <img class="" src="../assets/images/Frame 3738.png" alt="Background Image">

                <!-- Text -->
                <p class="font-extrabold text-white text-[20px] sm:text-[26px] font-family[metropolis] mt-[10px] sm:mt-[20px]">
                    Rejoignez<br> une équipe <br>qui gagne !
                </p>

                <!-- Button -->
                <button class="my-5 w-[160px] sm:w-[170px] px-6 py-2.5 h-[50px] bg-[#A577F0] hover:bg-[#5D32A3] text-white font-medium text-xs rounded-full shadow-md">
                    Nous-rejoindre
                </button>

                <!-- Image on the right (Man Image) -->
                <img class="absolute top-[0] lg:h-[330px] h-[300px] lg:right-[-30%] right-[-30%] sm:right-[-10%] sm:h-[320px] w-auto" src="../assets/images/man1.png" alt="Man Image">
            </div>

          </div>
  
          <!-- Other Cards -->
          <div v-else class="relative pb-[20px] border-b-[1px] border-[#e2dfdf]">
            <img :src="card.image" class="w-full h-[159px] rounded-tl-[40px] rounded-br-[40px] rounded-[20px]" alt="Card Image" />
            <div>
              <b class="text-[#0A0908] font-family[Metropolis] text-[14px] lg:text-[16px] font-extrabold text-left">{{ card.title }}</b>
              <div class="flex items-center mt-2">
                <img class="w-[20px] h-[20px]" src="./../assets/images/Frame_44.png" alt="Location Icon" />
                <p class="ml-2 text-[#5f5953] text-sm">{{ card.address }}</p>
              </div>
            </div>
            <a href="#" class="rounded-[100%] h-[34px] w-[34px] bg-[white] absolute top-2 right-5 flex items-center justify-center">
              <img src="../assets/images/solar_heart-outline.png" alt="Heart Icon" />
            </a>
            <NuxtLink 
                to="/IdLocation" 
                class="absolute top-[120px] left-5 flex"
            >
                <img src="../assets/images/Frame 18.png" alt="Heart Icon">
            </NuxtLink>
          </div>
        <div class="flex items-center justify-center mt-5">
            <a v-if="card.showQRCode" href="" class="mr-[20px] lg:mr-[30px]">
            <img class="opacity-40 w-5 lg:w-auto" src="../assets/images/solar_qr-code-bold.png" alt="QRCode">
            </a>
            <a v-if="card.showVector" href="">
            <img class="opacity-40 w-5 lg:w-auto" src="../assets/images/Vector.png" alt="Vector">
            </a>
        </div>
        </div>
      </div>

      <div class="mt-[20px]">
        <div class="flex items-center justify-center gap-2">
            <button class="p-2 rounded-[10px] hover:bg-[#A577F0] focus:outline-none bg-[white]">
                <img src="../assets/images/First.png" alt="">
            </button>
            <button class="p-2 rounded-[10px] hover:bg-[#A577F0] focus:outline-none bg-[white]">
                <img src="../assets/images/Prev.png" alt="">
            </button>
            <button class="p-2 h-8 w-8 rounded-[10px] bg-[#A577F0] text-white focus:outline-none">
                1
            </button>
            <button class="p-2 h-8 w-8 rounded-[10px] hover:bg-[#A577F0] focus:outline-none">
                2
            </button>
            <button class="p-2 h-8 w-8 rounded-[10px] hover:bg-[#A577F0] focus:outline-none">
                3
            </button>
            <span class="text-gray-400">...</span>
            <button class="p-2 h-8 w-8 rounded-[10px] hover:bg-[#A577F0] focus:outline-none">
                10
            </button>
            <button class="p-2 rounded-[10px] hover:bg-[#A577F0] focus:outline-none bg-[white]">
                <img src="../assets/images/Next1.png" alt="">
            </button>
            <button class="p-2 rounded-[10px] hover:bg-[#A577F0] focus:outline-none bg-[white]">
                <img src="../assets/images/Last.png" alt="">
            </button>
        </div>
      </div>

    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        cards: [
          {
            image: "./../assets/images/Rectangle_2.png",
            title: "Institut Français du Credit Management - IFCM",
            address: "6391 Elgin St. Celina, Delaware 10299",
            showQRCode: true,
            showVector: true,
          },
          {
            image: "./../assets/images/slack.jpg",
            title: "Institut Français du Credit Management - IFCM",
            address: "6391 Elgin St. Celina, Delaware 10299",
            showQRCode: true,
            showVector: true,
          },
          {
            image: "./../assets/images/Frame 3737.png", // 3rd Card Image
          },
          {
            image: "./../assets/images/blog5.jpg",
            title: "Institut Français du Credit Management - IFCM",
            address: "6391 Elgin St. Celina, Delaware 10299",
            showQRCode: true,
            showVector: true,
          },
          {
            image: "./../assets/images/blog6.jpg",
            title: "Institut Français du Credit Management - IFCM",
            address: "6391 Elgin St. Celina, Delaware 10299",
            showQRCode: true,
            showVector: true,
          },
          {
            image: "./../assets/images/blog.jpg",
            title: "Institut Français du Credit Management - IFCM",
            address: "6391 Elgin St. Celina, Delaware 10299",
            showQRCode: true,
            showVector: true,
          },
        ],
      };
    },
    computed: {
      isMobile() {
        return window.innerWidth <= 640; // Check if the screen width is mobile size
      },
      sortedCards() {
        // Reorder cards for mobile
        return this.isMobile
          ? [...this.cards.filter((_, index) => index !== 2), this.cards[2]] // Move the 3rd card to the last
          : this.cards;
      },
    },
  };
</script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  
<template>
  <div class="container mx-auto py-4 lg:px-[150px] lg:mt-[30px] px-4">
    <!-- router -->
    <div class="flex flex-wrap items-center">
      <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">Blog</p>
      <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
    </div>

    <!-- step_1 -->
    <p class=" text-lg lg:text-2xl font-family[metropolis] font-extrabold mt-4 mb-10 lg:mt-6">
      Blog et actualités du secteur
    </p>

    <!-- step_2 -->
    <div class="flex flex-wrap lg:items-center lg:justify-between gap-3 bg-[#F8F8FB] lg:flex-nowrap">
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
        <div class="flex items-center justify-between w-full">
          <!-- Dropdown -->
          <div class="circle w-[46px] h-[46px] rounded-full flex items-center justify-center bg-[#A577F0] block lg:hidden">
            <img src="../assets/images/mynaui_search.png" alt="">
          </div>
          <!-- Input Container -->
          <div class="relative flex-grow flex justify-end">
            <input
              type="text"
              class="w-[180px] lg:w-[300px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-[#A577F0] focus:border-[#A577F0] lg:placeholder:text-gray-400 text-sm lg:text-base"
              placeholder="Toutes catégories"
            />
            <a href="">
              <img class="absolute right-3 top-[30%] h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]" src="../assets/images/mingcute_down-line.png" alt="Dropdown Icon" />
            </a>
          </div>
        </div>
    </div>

    <!-- step_3 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
      <!-- Card 1 -->
      <div class="relative rounded-[30px] overflow-hidden shadow-lg">
        <img class="w-full h-[250px] md:h-[350px] object-cover rounded-[30px]" src="../assets/images/Card News.png" alt="Card News">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[30px] p-[28px] flex flex-col justify-end">
          <p class="text-[20px] md:text-[24px] font-extrabold text-white">
            Recruiter and Land Your Dream Job <br> Explore Nice Jobs
          </p>
          <NuxtLink to="/IdBlog" class="flex items-center mt-4">
            <img class="w-[40px] h-[40px] rounded-full mr-3" src="../assets/images/Ellipse 201.png" alt="Author">
            <div>
              <p class="text-[14px] text-white font-extrabold">Mialy Rak</p>
              <p class="text-[12px] text-white">Mar 28 • Business</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="relative rounded-[30px] overflow-hidden shadow-lg">
        <img class="w-full h-[250px] md:h-[350px] object-cover rounded-[30px]" src="../assets/images/Card News(1).jpg" alt="Card News">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-[30px] p-[28px] flex flex-col justify-end">
          <p class="text-[20px] md:text-[24px] font-extrabold text-white">
            Recruiter and Land Your Dream Job <br> Explore Nice Jobs
          </p>
          <NuxtLink to="/IdBlog" class="flex items-center mt-4">
            <img class="w-[40px] h-[40px] rounded-full mr-3" src="../assets/images/Ellipse 201.png" alt="Author">
            <div>
              <p class="text-[14px] text-white font-extrabold">Mialy Rak</p>
              <p class="text-[12px] text-white">Mar 28 • Business</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- step_4 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <div v-for="(card, index) in currentCards" :key="index"
          class="border-[1px] border-[#0A09081A] rounded-[30px] px-[20px] py-[20px] sm:px-[28px] sm:py-[28px] mt-5 hover:bg-[white]">
        <img :src="card.image" class="h-[175px] w-full rounded-[20px] mb-5 object-cover" alt="">
        <p class="text-[16px] font-extrabold mb-5 ">{{ card.title }}</p>
        <div class="flex items-center mt-2">
          <img class="w-[20px] h-[20px]" src="./../assets/images/Frame_36.png" alt="Icon">
          <p class="ml-2 text-[#5f5953] text-sm">{{ card.date }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
    data() {
        return {
        currentIndex: 0, // To keep track of the current card index
        cards: [
            {
            image: './../assets/images/blog.jpg',
            title: 'Le quart d`heure philosophique du Credit Manager',
            date: 'Jan 26   •   Business',
            },
            {
            image: './../assets/images/blog2.png',
            title: 'Le quart d`heure philosophique du Credit Manager',
            date: 'Jan 23   •   Business',
            },
            {
            image: './../assets/images/blog3.png',
            title: 'Le quart d`heure philosophique du Credit Manager',
            date: 'Jan 27   •   Business',
            },
            {
            image: './../assets/images/blog8.jpg',
            title: 'Le quart d`heure philosophique du Credit Manager',
            date: 'Jan 17   •   Business',
            },
            {
            image: './../assets/images/recent4.jpg',
            title: 'Le quart d`heure philosophique du Credit Manager',
            date: 'Jan 6   •   Business',
            },
            
        ]
        };
    },
    computed: {
        // Get the 1 card for mobile, and 3 cards for desktop
        currentCards() {
        const isMobile = window.innerWidth < 1024; // Check if the screen size is mobile
        const visibleCards = isMobile ? [this.cards[this.currentIndex]] : this.cards.slice(this.currentIndex, this.currentIndex +10);
        return visibleCards;
        }
    },
    };
</script>

<style>

</style>
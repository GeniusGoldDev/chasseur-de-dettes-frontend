<template>
  <div class="container mx-auto py-4 justify-between">
    <div class="w-full flex flex-col lg:flex-row justify-between">
      <div class="mb-4 lg:mb-0">
        <p class="text-[#0A0908] font-family[Metropolis] text-[24px] lg:text-[32px] font-extrabold leading-[28px] lg:leading-[38.4px] text-left">
          Recommandé pour vous
        </p>
      </div>
      <div class="flex justify-center lg:justify-end">
        <a href="" class="mr-3 previous" @click.prevent="goToPrevious">
          <img class="w-6 lg:w-auto" src="./../assets/images/previous.png" alt="Previous">
        </a>
        <a href="" class="next" @click.prevent="goToNext">
          <img class="w-6 lg:w-auto" src="./../assets/images/next.png" alt="Next">
        </a>
      </div>
    </div>

    <!-- Display 1 card on mobile, 3 cards on desktop -->
    <div class="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10 justify-center">
      <!-- Loop through cards and display 1 per row on mobile, 3 per row on desktop -->
      <div 
        v-for="(card, index) in currentCards" 
        :key="index"
        class="w-full max-w-[368px] mx-auto border-[20px] border-white rounded-tl-[40px] rounded-br-[40px] rounded-[20px] px-4 py-4 bg-white"
      >
        <!-- Card Image and Content -->
        <div class="relative pb-[20px] border-b-[1px] border-[#e2dfdf]">
          <div class="mb-2">
            <img 
              :src="card.image" 
              class="w-full h-[159px] object-cover rounded-tl-[40px] rounded-br-[40px] rounded-[20px]" 
              alt="Image"
            >
          </div>
          <div>
            <b class="text-[#0A0908] font-family[Metropolis] text-[14px] lg:text-[16px] font-extrabold">
              {{ card.title }}
            </b>
            <div class="flex items-center mt-2">
              <img class="w-5 h-5" src="./../assets/images/Frame_44.png" alt="Icon">
              <p class="ml-2 text-[#5f5953] text-sm">{{ card.address }}</p>
            </div>
          </div>
          <a 
            href="#" 
            class="rounded-full h-9 w-9 bg-white absolute top-2 right-5 flex items-center justify-center shadow-md"
          >
            <img src="../assets/images/solar_heart-outline.png" alt="Heart Icon">
          </a>
          <NuxtLink 
                to="/IdLocation" 
                class="absolute top-[120px] left-5 flex"
            >
                <img src="../assets/images/Frame 18.png" alt="Heart Icon">
          </NuxtLink>
        </div>

        <!-- Actions (QR Code and Vector) -->
        <div class="flex items-center justify-center mt-5">
          <a 
            v-if="card.showQRCode" 
            href="#" 
            class="mr-5 lg:mr-10 opacity-50 hover:opacity-100 transition"
          >
            <img class="w-5 h-5 lg:w-auto lg:h-auto" src="../assets/images/solar_qr-code-bold.png" alt="QRCode">
          </a>
          <a 
            v-if="card.showVector" 
            href="#" 
            class="opacity-50 hover:opacity-100 transition"
          >
            <img class="w-5 h-5 lg:w-auto lg:h-auto" src="../assets/images/Vector.png" alt="Vector">
          </a>
        </div>
      </div>
    </div>


    <!-- "Voir plus" button -->
    <div class="mt-10 flex justify-center">
      <button class="flex w-full lg:w-auto px-4 lg:px-6 py-2.5 h-[50px] bg-gradient-to-r from-[#A577F0] to-[#A577F0] text-white font-medium text-sm lg:text-xs rounded-full shadow-md items-center justify-center">
        <img class="mr-2" src="../assets/images/refre.png" alt="Refresh">
        Voir plus
      </button>
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
          image: './../assets/images/Rectangle_2.png',
          title: 'Institut Français du Credit Management - IFCM',
          address: '6391 Elgin St. Celina, Delaware 10299',
          showQRCode: true,
          showVector: true,
          },
          {
          image: './../assets/images/slack.jpg',
          title: 'Institut Français du Credit Management - IFCM',
          address: '6391 Elgin St. Celina, Delaware 10299',
          showQRCode: true,
          showVector: true,
          },
          {
          image: './../assets/images/first.jpg',
          title: 'Institut Français du Credit Management - IFCM',
          address: '6391 Elgin St. Celina, Delaware 10299',
          showQRCode: true,
          showVector: true,
          },
          {
          image: './../assets/images/first.jpg',
          title: 'Institut Français du Credit Management - IFCM',
          address: '6391 Elgin St. Celina, Delaware 10299',
          showQRCode: true,
          showVector: true,
          },
          {
          image: './../assets/images/first.jpg',
          title: 'Institut Français du Credit Management - IFCM',
          address: '6391 Elgin St. Celina, Delaware 10299',
          showQRCode: true,
          showVector: true,
          },
          {
          image: './../assets/images/Rectangle_2.png',
          title: 'Institut Français du Credit Management - IFCM',
          address: '6391 Elgin St. Celina, Delaware 10299',
          showQRCode: true,
          showVector: true,
          },
          // Add more cards as needed
      ]
      };
  },
  computed: {
      // Get the 1 card for mobile, and 3 cards for desktop
      currentCards() {
      const isMobile = window.innerWidth < 1024; // Check if the screen size is mobile
      const visibleCards = isMobile ? [this.cards[this.currentIndex]] : this.cards.slice(this.currentIndex, this.currentIndex + 3);
      return visibleCards;
      }
  },
  methods: {
      goToPrevious() {
      if (this.currentIndex > 0) {
          this.currentIndex -= 1; // Go back by 1 card
      } else {
          this.currentIndex = this.cards.length - (this.cards.length % 3); // Wrap around to the last group of cards
      }
      },
      goToNext() {
      if (this.currentIndex < this.cards.length - 3) {
          this.currentIndex += 1; // Go forward by 1 group of 3 cards
      } else {
          this.currentIndex = 0; // Wrap around to the first group of cards
      }
      }
  }
  };
</script>

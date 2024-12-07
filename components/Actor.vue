<template>
    <div class="px-4 lg:px-[150px] container mx-auto py-4 justify-between items-center">
      <div class="w-full flex flex-col lg:flex-row justify-between">
        <div class="mb-4 lg:mb-0">
          <p class="text-[#0A0908] font-family[Metropolis] text-[24px] lg:text-[32px] font-extrabold leading-[28px] lg:leading-[38.4px] text-left">
            Acteurs mis en avant
          </p>
          <p class="text-[#0A0908] font-family[Metropolis] text-[12px] lg:text-[14px] font-medium leading-[16px] lg:leading-[20.3px] text-left opacity-70">
            Tout les acteurs qui sont mis en avant sur Chasseurs de dettes
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
      <div class="flex-wrap justify-center lg:justify-start lg:grid lg:grid-cols-3">
        <!-- Loop through cards and display 1 card on mobile, 3 at a time on desktop -->
        <div v-for="(card, index) in currentCards" :key="index"
          class="w-full sm:w-[90%] md:w-[368px] border-[20px] border-white rounded-tl-[40px] rounded-br-[40px] rounded-[20px] px-[5px] bg-white mr-0 md:mr-[60px] mt-[20px] lg:mt-[57px]">
          
          <div class="relative pb-[20px] border-b-[1px] border-[#e2dfdf]">
            <div class="mb-2">
              <img :src="card.image" class="w-full md:w-[312px] h-[159px] rounded-tl-[40px] rounded-br-[40px] rounded-[20px]" alt="Image">
            </div>
            <div>
              <b class="text-[#0A0908] font-family[Metropolis] text-[14px] lg:text-[16px] font-extrabold text-left">
                {{ card.title }}
              </b>
              <div class="flex items-center mt-2">
                <img class="w-[20px] h-[20px]" src="./../assets/images/Frame_44.png" alt="Icon">
                <p class="ml-2 text-[#5f5953] text-sm">{{ card.address }}</p>
              </div>
            </div>
            <a href="" class="rounded-[100%] h-[34px] w-[34px] bg-[white] absolute top-2 right-5 flex items-center justify-center">
              <img src="../assets/images/solar_heart-outline.png" alt="Heart Icon">
            </a>
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
  
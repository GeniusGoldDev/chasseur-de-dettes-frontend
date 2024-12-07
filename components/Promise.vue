<template>
    <div class="px-4 lg:px-[150px] container mx-auto grid grid-cols-1 lg:grid-cols-2 py-4 justify-between mt-[52px]">
        <!-- Left Column: Text Section -->
        <div class="mt-[36px]">
        <p class="text-[#0A0908] font-family[Metropolis] text-[32px] font-extrabold leading-[38.4px] text-left underline-from-font no-underline-skip-ink">
            Sécurisez Vos Besoins avec Nos Promesses
        </p>
        <p class="text-[#0A0908] font-family[Metropolis] text-[14px] font-medium leading-[20.3px] text-left underline-from-font no-underline-skip-ink opacity-[56%]">
            Chez Chasseur de dettes, nous nous engageons à vous offrir une expérience complète et rassurante. Avec une multitude d’annonces et des services adaptés à vos besoins, nous sommes là pour vous accompagner à chaque étape. Découvrez nos promesses qui garantissent votre satisfaction.
        </p>
        </div>
        
        <!-- Right Column: Cards Section -->
        <div class="ml-0 lg:ml-20 grid grid-cols-1 lg:grid-cols-1 gap-6 mt-6 lg:mt-0">
        <div v-for="(card, index) in cards" :key="index" class="flex lg:border-[1px] border-b-[1px] lg:rounded-[50px] px-[26px] py-[26px]">
            <img :src="card.icon" alt="" class="w-[40px] h-[40px]">
            <div class="ml-10 items-center mt-3">
            <p class="text-[18px] font-bold mb-2 font-family[Metropolis]">{{ card.title }}</p>
            <a class="flex" href="">
                <p class="text-[12px] font-family[Metropolis]">Voir plus</p>
                <img src="../assets/images/icon3/Frame 22.png" alt="" class="ml-2">
            </a>
            </div>
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
            icon: './../assets/images/icon3/icons.png',
            title: 'Plus de 10 000 annonces',
          },
          {
            icon: './../assets/images/icon3/icons(1).png',
            title: 'Du rachat de créances au',
          },
          {
            icon: './../assets/images/icon3/icons(2).png',
            title: 'Les événements incontournables',
          },
          {
            icon: './../assets/images/icon3/icons(3).png',
            title: 'Facile à utiliser',
          },
          {
            icon: './../assets/images/icon3/icons(4).png',
            title: 'Support 7/7',
          },
        ],
      };
    },
  };
  </script>
  
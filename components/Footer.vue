<template>
    <footer class="relative container mx-auto px-4 lg:px-[125px] bg-[#121212] text-white">
      <!-- Newsletter Section -->
      <div class="absolute w-full top-[-150px] left-0 px-4 lg:px-[150px]">
        <div class="w-full bg-[#A577F0] rounded-[30px] py-6 lg:py-[59px] px-6 lg:px-[257px] text-center lg:text-left">
          <p class="font-extrabold text-[24px] lg:text-[32px] leading-[30px] lg:leading-[38.4px]">
            Inscrivez-vous à notre newsletter
          </p>
          <p class="mt-4 lg:mt-[42px] text-[14px] leading-[20px] opacity-70">
            Nous écrire rarement, mais seulement le meilleur contenu.
          </p>
          <div class="relative w-full mt-6">
            <input
              class="w-full py-3 px-4 lg:px-6 text-gray-700 bg-white rounded-full placeholder-gray-400 placeholder-opacity-70"
              type="text"
              placeholder="Youremail@gmail.com"
            />
            <button
              class="absolute right-0 top-0 bottom-0 bg-[#0A0908] text-white rounded-full px-6 lg:px-[62px] text-[12px]"
            >
              Rejoignez
            </button>
          </div>
        </div>
      </div>
  
      <!-- Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6">
        <!-- Left Column -->
        <div class="mt-[200px] lg:text-left">
          <a href="/" class="block">
            <img src="../assets/images/fLogo.png" alt="Logo" class="mx-0 lg:mx-0">
          </a>
          <p class="mt-4 text-[14px] opacity-70 left-0">
            La plus grande source d'information sur tout ce qui touche de près ou de loin au Credit Management et au recouvrement.
          </p>
          <div class="flex justify-center lg:justify-start mt-4 space-x-4">
            <a href="#"><img src="../assets/images/ri_facebook-fill.png" alt="Facebook"></a>
            <a href="#"><img src="../assets/images/ri_linkedin-fill.png" alt="LinkedIn"></a>
          </div>
        </div>
  
        <!-- Middle Column -->
        <div class="lg:mt-[200px] mt-[50px] lg:text-left">
          <p class="text-[14px] font-bold mb-4">À propos</p>
          <ul class="space-y-3">
            <li><a href="#" class="opacity-70 hover:opacity-100">Qui sommes-nous ?</a></li>
            <li><a href="#" class="opacity-70 hover:opacity-100">Comment ça marche?</a></li>
            <li><a href="#" class="opacity-70 hover:opacity-100">Offres</a></li>
            <li><a href="#" class="opacity-70 hover:opacity-100">Blog</a></li>
            <li><a href="#" class="opacity-70 hover:opacity-100">Contact</a></li>
          </ul>
        </div>
  
        <!-- Right Column -->
        <div class="lg:mt-[200px] my-[50px] lg:text-left">
          <p class="text-[14px] font-bold mb-4">Accès rapide</p>
          <ul class="space-y-3">
            <li><a href="#" class="opacity-70 hover:opacity-100">Connexion</a></li>
            <li><a href="#" class="opacity-70 hover:opacity-100">Ajouter un profil</a></li>
            <li><a href="#" class="opacity-70 hover:opacity-100">Individuel</a></li>
          </ul>
        </div>
      </div>
  
      <!-- Footer Bottom -->
      <div class="text-center py-4 opacity-70 border-t border-t-[#3d3333]">
        © 2024 - Chasseurs de dettes
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  </style>
  
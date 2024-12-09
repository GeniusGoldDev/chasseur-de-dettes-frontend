<template>
    <div class="container flex flex-wrap gap-5 mx-auto px-4 py-4 lg:px-[150px] lg:mt-[80px]">
      <!-- Left Section (Newsletter & Join Team) -->
      <div class="w-full lg:w-[30%] space-y-6">
        <!-- Newsletter Section -->
        <div class="w-full rounded-[30px] bg-white text-center py-6 sm:py-[45px] px-4 sm:px-[15px]">
          <p class="text-[16px] sm:text-[18px] font-family[metropolis] font-extrabold">Inscrivez-vous à notre newsletter</p>
          <p class="text-[12px] sm:text-[14px] font-family[metropolis] my-4">Nous écrire rarement, mais seulement le meilleur contenu.</p>
          <div class="hidden lg:flex items-center justify-between gap-3 bg-[#F8F8FB] rounded-full">
            <div class="relative w-full">
              <input
                type="text"
                class="w-full bg-[#F4F4F4] text-[12px] lg:text-[14px] border-none pl-4 pr-[100px] py-3 rounded-full focus:ring-2 focus:ring-[#A577F0] placeholder:text-gray-400"
                placeholder="Youremail@gmail.com"
              />
              <button
                class="text-white absolute right-[0.5rem] top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-[#020202] to-[#000000] rounded-full h-[40px] px-5 lg:px-7 flex justify-center items-center"
              >
                Rejoignez
              </button>
            </div>
          </div>
        </div>

        <!-- Join Team Section -->
        <div class="relative overflow-hidden bg-[#A577F0] pt-[26px] pl-6 pr-4 sm:pl-[25px] w-full rounded-[30px] sm:rounded-[40px]">
          <p class="text-white text-[20px] sm:text-[26px] font-family[metropolis] font-extrabold mt-4">
            Rejoignez<br /> une équipe <br />qui gagne !
          </p>
          <button class="my-5 px-6 py-2.5 w-[170px] bg-[#5D32A3] hover:bg-[#A577F0] text-white rounded-full">
            Nous-rejoindre
          </button>
          <img
            class="absolute top-0 lg:right-[-25%] w-full left-[30%] lg:h-full lg:w-auto object-contain"
            src="../../assets/images/man1.png"
            alt="Man Image"
          />
        </div>
      </div>

      <!-- Right Section (Register Form) -->
      <div class="w-full lg:w-[67%] rounded-[30px] bg-white px-4 py-6 sm:px-8 sm:py-10 lg:px-[60px] lg:py-[45px]">
        <!-- Register Text -->
        <div class="mb-6 lg:mb-[60px] text-center lg:text-left">
          <p class="text-[24px] sm:text-[32px] font-family[metropolis] font-extrabold">Créer un compte</p>
          <p class="text-[12px] sm:text-[14px] font-family[metropolis] mt-2">
            L’inscription est simple et rapide. Remplissez le formulaire ci-dessous et votre compte sera immédiatement créé.
          </p>
        </div>

        <!-- Register Input -->
        <div class="input_list space-y-4">
          <input
            class="bg-[#F4F4F4] text-[12px] sm:text-[14px] rounded-[25px] px-4 sm:px-[26px] py-[12px] sm:py-[15px] placeholder-gray-400 border-none w-full"
            type="text"
            placeholder="Nom (obligatoire)"
          />
          <input
            class="bg-[#F4F4F4] text-[12px] sm:text-[14px] rounded-[25px] px-4 sm:px-[26px] py-[12px] sm:py-[15px] placeholder-gray-400 border-none w-full"
            type="text"
            placeholder="Identifiant (obligatoire)"
          />
          <input
            class="bg-[#F4F4F4] text-[12px] sm:text-[14px] rounded-[25px] px-4 sm:px-[26px] py-[12px] sm:py-[15px] placeholder-gray-400 border-none w-full"
            type="text"
            placeholder="Adresse e-mail (obligatoire)"
          />
          <input
            class="bg-[#F4F4F4] text-[12px] sm:text-[14px] rounded-[25px] px-4 sm:px-[26px] py-[12px] sm:py-[15px] placeholder-gray-400 border-none w-full"
            type="password"
            placeholder="Définissez votre mot de passe (obligatoire)"
          />
        </div>

        <!-- Checkbox -->
        <div class="my-4 flex items-center">
          <img class="w-4 h-4 mr-2" src="../../assets/images/check.png" alt="" />
          <p class="opacity-[56%] text-[12px] sm:text-[14px] font-family[metropolis]">
            J’ai lu et j’approuve la Politique de confidentialité de ce site.
          </p>
        </div>

        <!-- Button -->
        <button
          class="justify-center text-white text-[14px] bg-[#A577F0] w-full py-4 flex items-center text-center rounded-[30px]"
        >
          S’inscrire
        </button>

        <!-- Login Link -->
        <div class="flex justify-center items-center mt-8 gap-3">
          <p class="text-[12px] sm:text-[14px] font-family[metropolis]">Vous avez déjà un compte?</p>
          <Nuxt-link to="/auth/Login">
            <p class="text-[#43BD74] text-[12px] sm:text-[14px] font-family[metropolis]">Se connecter</p>
          </Nuxt-link>
        </div>
      </div>
    </div>

</template>

<script lang="ts" setup>

</script>

<style>

</style>
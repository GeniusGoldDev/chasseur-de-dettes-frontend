<template>
    <header class="px-4 lg:px-[150px] bg-[#FAF6FE] fixed w-full z-[200] h-[80px] pt-[20px] lg:py-0">
      <nav class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <div class="logo text-2xl font-bold">
          <nuxt-link to="/">
            <img src="../../assets/images/Logo.svg" alt="Brand Logo" class="h-8 w-auto" />
          </nuxt-link>
        </div>
  
        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden block text-[#6B72E1]"
          @click="toggleMobileMenu"
          aria-label="Toggle Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
  
        <!-- Links Section -->
        <div
          :class="[
            'lg:flex lg:items-center lg:space-x-6 lg:static',
            mobileMenuOpen ? 'block' : 'hidden',
            'px-[50px] absolute top-0 right-0 w-[80%] bg-white shadow-lg lg:shadow-none lg:bg-transparent lg:w-auto lg:ml-auto'
          ]"
        >
          <!-- Close Button for Mobile -->
          <button
            v-if="mobileMenuOpen"
            class="absolute top-4 right-4 lg:hidden text-2xl font-bold text-[#A577F0]"
            @click="toggleMobileMenu"
          >
            &times;
          </button>
  
          <ul class="mt-[30px] lg:mt-0 flex flex-col lg:flex-row lg:space-x-10 text-gray-700">
            <li class="mt-3 lg:mt-0">
              <nuxt-link
                to="/"
                class="font-medium text-[14px] leading-[20.3px] text-[#585654]"
                exact-active-class="font-bold"
              >Accueil</nuxt-link>
            </li>
            <li class="mt-3 lg:mt-0">
              <nuxt-link
                to="/Directory"
                class="font-medium text-[14px] leading-[20.3px] text-[#585654]"
                exact-active-class="font-bold"
              >Annuaire</nuxt-link>
            </li>
            <li class="mt-3 lg:mt-0">
              <nuxt-link
                to="/services"
                class="font-medium text-[14px] leading-[20.3px] text-[#585654]"
                exact-active-class="font-bold"
              >Offres d’emplois</nuxt-link>
            </li>
            <li class="mt-3 lg:mt-0">
              <nuxt-link
                to="/contact"
                class="font-medium text-[14px] leading-[20.3px] text-[#585654]"
                exact-active-class="font-bold"
              >Evènements</nuxt-link>
            </li>
            <li class="mt-3 lg:mt-0">
              <nuxt-link
                to="/Blog"
                class="font-medium text-[14px] leading-[20.3px] text-[#585654]"
                exact-active-class="font-bold"
              >Blog</nuxt-link>
            </li>
          </ul>
  
          <!-- Action Buttons -->
          <div class="flex flex-col lg:flex-row lg:items-center lg:space-x-4 mt-4 lg:mt-0">
            <button
              class="my-5 w-full lg:w-auto px-6 py-2.5 h-[50px] bg-gradient-to-r from-[#A577F0] to-[#A577F0] text-white font-medium text-xs rounded-full shadow-md"
            >
            <nuxt-link
                to="/auth/Register"
                class="font-medium text-[14px] leading-[20.3px] text-[#585654]"
                exact-active-class="font-bold"
              >Inscription
            </nuxt-link>
            </button>
  
            <div class="relative inline-block">
              <button
                class="w-full flex items-center px-4 py-2 bg-white text-[#6B72E1] font-medium text-xs rounded-full border border-[#dedee0] shadow-md hover:bg-[#A577F0] hover:text-white transition"
                @click="toggleLanguageDropdown"
              >
                <span>FR</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                v-show="languageDropdownOpen"
                class="absolute z-[250] right-0 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg"
              >
                <div class="px-4 py-3">
                  <p class="text-sm text-gray-900">Choose language</p>
                </div>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                </div>
              </div>
            </div>
            <div class="relative inline-block">
              <button
                class="w-full flex items-center px-4 py-2 my-5 bg-white text-[#6B72E1] font-medium text-xs rounded-full border border-[#dedee0] shadow-md hover:bg-[#A577F0] hover:text-white transition"
                @click="toggle$Dropdown"
              >
                <span>$</span>
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div
                v-show="$DropdownOpen"
                class="absolute right-0 mt-2 w-56 bg-white divide-y divide-gray-100 rounded-md shadow-lg"
              >
                <div class="px-4 py-3">
                  <p class="text-sm text-gray-900">Choose</p>
                </div>
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">USD</a>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">GBP</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // State for toggling menus
  const mobileMenuOpen = ref(false);
  const languageDropdownOpen = ref(false);
  const $DropdownOpen = ref(false);
  
  // Functions for toggling state
  const toggleMobileMenu = () => (mobileMenuOpen.value = !mobileMenuOpen.value);
  const toggleLanguageDropdown = () => (languageDropdownOpen.value = !languageDropdownOpen.value);
  const toggle$Dropdown = () => ($DropdownOpen.value = !$DropdownOpen.value);
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  
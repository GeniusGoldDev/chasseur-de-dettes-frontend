<template>
    <div class="bg-[#FAF6FE]">
      <Header />
      <main class="pt-16 pb-[200px]">
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "~/components/Header.vue";
  import Footer from "~/components/Footer.vue";
  </script>
  
  <style>
 
  </style>
  
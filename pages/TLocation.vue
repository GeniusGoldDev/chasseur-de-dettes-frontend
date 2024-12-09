<template>
    <Layout :useNewHeader="true">
      <div class="container mx-auto py-4 lg:px-[150px] lg:mt-[30px] px-4">
        <div class="flex flex-wrap items-center">
          <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">
            Accueil
          </p>
          <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
          <p class="text-sm text-black opacity-[48%] font-family[metropolis] mr-2 lg:text-base">
            Toutes catégories
          </p>
          <img class="mr-2" src="../assets/images/mingcute_right-line.png" alt="Arrow Icon" />
          <p class="text-sm text-black font-family[metropolis] mr-2 lg:text-base">
            Formation - Enseignement
          </p>
        </div>
        <p class="text-lg lg:text-2xl font-family[metropolis] font-extrabold mt-4 lg:mt-6">
          Formation - Enseignement
        </p>
      </div>

      <Category />

      <Teach />
      
    </Layout>
  </template>
  
  <script setup>
  import Category from "~/components/Category.vue";
  import Teach from "~/components/Teach.vue";
  import Layout from "~/layouts/default.vue";
  </script>
  
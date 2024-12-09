<template>
    <div class="bg-[#FAF6FE]">
      <!-- Dynamically render Header or NewHeader -->
      <component :is="headerComponent" />
      <main class="pt-16 pb-[200px]">
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { computed, watch } from "vue";
  import { useRoute } from "vue-router";
  import Header from "~/components/reusable/Header.vue";
  import NewHeader from "~/components/NewHeader.vue";
  import Footer from "~/components/reusable/Footer.vue";
  
  const route = useRoute();
  
  // Dynamically compute which header to show
  const headerComponent = computed(() => {
    return route.name === "IdBlog" ? NewHeader : Header; // Replace with your exact route name
  });
  
  // Optional: Watch for route changes if you need additional logic
  watch(
    () => route.name,
    (newVal) => {
      console.log("Route changed to:", newVal);
    }
  );
  </script>
  
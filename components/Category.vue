<template>
    <div class="px-4 lg:px-[150px] container mx-auto py-4 flex flex-wrap justify-center lg:justify-center items-center">
        <!-- "Toutes catégories" Button -->
        <button
            class="
                inline-block
                px-6 py-2.5
                h-[54px]
                bg-white
                text-[#31302f]
                font-medium
                text-xs
                leading-tight
                rounded-full
                shadow-md
                border-[2px]
                mr-[10px] lg:mr-[26px]
                border-[#A577F0]
                hover:bg-[#A577F0]
                hover:text-white
                transition
                ease-in-out
                duration-200
                w-full
                lg:w-[auto]
            "
            @click="toggleCategories"
        >
            Toutes catégories
        </button>

        <!-- Other Categories -->
        <div
            class="hidden lg:flex flex-wrap mt-2 lg:mt-0 lg:visible"
        >
            <button
                v-for="(category, index) in otherCategories"
                :key="index"
                :aria-label="category.label"
                class="
                    inline-block
                    px-6 py-2.5
                    h-[54px]
                    bg-white
                    text-[#31302f]
                    font-medium
                    text-xs
                    leading-tight
                    rounded-full
                    shadow-md
                    border-[2px]
                    mr-[10px] lg:mr-[26px]
                    border-[#A577F0]
                    hover:bg-[#A577F0]
                    hover:text-white
                    transition
                    ease-in-out
                    duration-200
                "
            >
                {{ category.label }}
            </button>
        </div>

        <!-- Other Categories (Mobile Only) -->
        <div
            v-if="showCategories"
            class="flex flex-wrap mt-2 lg:hidden"
        >
            <button
                v-for="(category, index) in otherCategories"
                :key="index"
                :aria-label="category.label"
                class="
                    inline-block
                    px-6 py-2.5
                    lg:px-26
                    lg:py-3
                    h-[54px]
                    bg-white
                    text-[#31302f]
                    font-medium
                    text-[14px]
                    leading-tight
                    rounded-full
                    shadow-md
                    border-[2px]
                    mr-[10px] lg:mr-[26px]
                    border-[#A577F0]
                    hover:bg-[#A577F0]
                    hover:text-white
                    transition
                    ease-in-out
                    duration-200
                "
            >
                {{ category.label }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCategories: false, // Controls visibility of other categories on mobile
            otherCategories: [
                { label: "Bases de données" },
                { label: "Formation - Enseignement" },
                { label: "Enquêteurs" },
                { label: "Renseignements commerciaux" },
                { label: "+10" },
            ],
        };
    },
    methods: {
        toggleCategories() {
            this.showCategories = !this.showCategories; // Toggle visibility
        },
    },
};
</script>

<style scoped>
/* Optional: Add custom transitions or styles for smooth appearance on mobile */
</style>

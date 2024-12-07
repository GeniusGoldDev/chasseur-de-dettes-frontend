<template>
    <div class="relative px-[150px] container mx-auto py-4 justify-between items-center">
        <div class="w-[100%] flex justify-between ">
            <div class="">
                <p class="text-[#0A0908] 
                            font-family[Metropolis]
                            text-[32px]
                            font-extrabold
                            leading-[38.4px]
                            text-left
                            underline-from-font
                            no-underline-skip-ink
                        ">
                        Blog
                </p>
                <p class="
                        text-[#0A0908]
                        font-family[Metropolis]
                        text-[14px]
                        font-medium
                        leading-[20.3px]
                        text-left
                        underline-from-font
                        no-underline-skip-ink
                        opacity-[56%]
                ">
                Les actualités du secteur
                </p>
            </div>
            <div class="flex">
                <a href="" class="mr-3"><img class="" src="./../assets/images/previous.png" alt=""></a>
                <a href="" class=""><img class="" src="./../assets/images/next.png" alt=""></a>
            </div>
        </div>
        <div class="flex">
            <BlogBlock />
        </div>
        <div class="mt-10 flex justify-center">
            <button 
              class="flex w-full lg:w-auto px-6 py-2.5 h-[50px] bg-gradient-to-r from-[#A577F0] to-[#A577F0] text-white font-medium text-xs rounded-full shadow-md items-center"
            >
            <img src="../assets/images/refre.png" alt="">
            Voir plus
            </button>
        </div>
    </div>
</template>
<script>
    import BlogBlock from "~/components/BlogBlock.vue"
</script>
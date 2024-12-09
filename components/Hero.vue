<template>
    <div class="px-4 lg:px-[150px] hero container mx-auto py-4 flex flex-col lg:flex-row justify-between items-center">
        <!-- Hero Left -->
        <div class="hero_left w-full lg:w-[50%]">
            <div class="Frame_1 mt-6 flex bg-gradient-to-r from-[#581EB700] via-[#581EB700] to-[#581EB726] w-full lg:w-[313px] h-[46px] rounded-full pt-[10px] ps-5">
                <img class="w-[22px] h-[22px]" src="./../assets/solar_cash-out-bold.png" alt="">
                <p class="ms-3 text-[#A577F0] text-sm lg:text-base">Ne cherchez plus, ils sont tous ici!</p>
            </div>
            <div class="Frame_2 mt-6">
                <p class="
                    text-[#0A0908]
                    font-family[Metropolis]
                    text-[32px] lg:text-[52px]
                    font-[800]
                    leading-tight lg:leading-[62.4px]
                    text-left
                ">
                    Les acteurs du Credit Management et du Recouvrement
                </p>
            </div>
            <div class="Frame_3 mt-6">
                <div class="flex items-center mt-3">
                    <img class="w-[22px] h-[22px]" src="./../assets/images/frame_3.png" alt="">
                    <p class="ms-3 text-[#0A0908] text-xs lg:text-sm">Renseignements commerciaux</p>
                </div>
                <div class="flex items-center mt-3">
                    <img class="w-[22px] h-[22px]" src="./../assets/images/frame_3.png" alt="">
                    <p class="ms-3 text-[#0A0908] text-xs lg:text-sm">Assurance credit</p>
                </div>
                <div class="flex items-center mt-3">
                    <img class="w-[22px] h-[22px]" src="./../assets/images/frame_3.png" alt="">
                    <p class="ms-3 text-[#0A0908] text-xs lg:text-sm">Addacturage</p>
                </div>
                <div class="flex items-center mt-3">
                    <img class="w-[22px] h-[22px]" src="./../assets/images/frame_3.png" alt="">
                    <p class="ms-3 text-[#0A0908] text-xs lg:text-sm">Recruteurs</p>
                </div>
            </div>
            <div class="Frame_4 mt-6">
                <div class="relative w-full lg:w-[70%]">
                    <input
                        class="
                            w-full
                            px-4 py-2.5
                            text-gray-700
                            bg-white
                            border-white
                            rounded-full
                            focus:ring-2
                            focus:ring-[#A577F0]
                            focus:border-[#A577F0]
                            placeholder:text-gray-400
                        "
                        type="text"
                        placeholder="Commencez votre recherche"
                    />
                    <button
                        class="
                            border-white
                            absolute
                            right-0
                            top-0
                            bottom-0
                            px-4
                            bg-[#A577F0]
                            text-white
                            rounded-full
                            hover:bg-[#6F4A9F]
                            focus:outline-none
                            focus:ring-2
                            focus:ring-[#A577F0]
                            focus:ring-offset-2
                        "
                    >
                        Recherche
                    </button>
                </div>
            </div>
        </div>
    
        <!-- Hero Right -->
        <div class="hero_right w-full lg:w-[50%] relative mt-6 lg:mt-0">
            <img src="../assets/images/Right.png" alt="">
        </div>
    </div>
</template>
<template>
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-4 px-4 lg:px-[150px] lg:mt-[30px]">
        <!-- Image Section -->
        <div class="relative mt-5 flex justify-center lg:justify-end">
            <!-- First Image -->
            <img
            class="relative z-[50] max-w-[80%] lg:max-w-[80%]"
            src="../assets/images/Rectangle 1 (1).png"
            alt="Rectangle 1"
            />
            <!-- Second Image -->
            <img
            class="absolute top-[15px] lg:w-full lg:h-full left-[-100px] lg:top-[20%] lg:left-[-100px] z-[20] max-w-[100%]"
            src="../assets/images/Rectangle 2 (3).png"
            alt="Rectangle 2"
            />
        </div>

        <!-- Text Content Section -->
        <div class="px-4 lg:px-[30px] py-6 lg:py-[50px] mt-5 lg:mt-0">
            <!-- Title -->
            <p
            class="mb-5 font-family[metropolis] font-extrabold text-[24px] sm:text-[28px] lg:text-[40px] text-black">
            Chasseurs de Dettes
            </p>

            <!-- Paragraph -->
            <p class="font-family[metropolis] text-[14px] sm:text-[16px] leading-6 sm:leading-7 text-gray-700">
            Une expression qui peut plaire ou déplaire selon l’angle d’approche, mais qui a
            <br class="hidden sm:inline" /> pour mérite de définir instantanément ce que nous sommes et à quoi nous
            participons.
            <br /><br />
            Nous, les Credit Managers, Responsables Recouvrement, Agents
            <br class="hidden sm:inline" /> de Recouvrement, Gestionnaires de Litiges, Enquêteurs, Analystes Credit,
            <br class="hidden sm:inline" /> Créateurs de logiciels de Recouvrement, Assureurs Credit, Formateurs,
            <br class="hidden sm:inline" /> Encaisseurs, Spécialistes de l’Affacturage, Brokers, Etc.
            <br /><br />
            Nous contribuons au bon déroulement des transactions contractuelles. Nous sécurisons
            <br class="hidden sm:inline" /> les échanges économiques. Nos actions, tant préventives que
            <br class="hidden sm:inline" /> curatives, visent à faire en sorte que les droits et les obligations des Parties soient respectées.
            </p>
        </div>
      </div>
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 py-4 px-4 lg:px-[150px] lg:mt-[30px]">
        <div class="px-4 lg:px-[30px] py-6 lg:py-[50px] mt-5 lg:mt-0">
            <!-- Title -->
             <NuxtLink to="/">
                 <p class="font-family[metropolis] text-[14px] sm:text-[16px] leading-6 sm:leading-7 text-[#43BD74]">chasseursdedettes.com</p>
             </NuxtLink>
            <p
            class="mb-5 font-family[metropolis] font-extrabold text-[24px] sm:text-[28px] lg:text-[40px] text-black">
            Moteur de recherche
            </p>

            <!-- Paragraph -->
            <p class="font-family[metropolis] text-[14px] sm:text-[16px] leading-6 sm:leading-7 text-gray-700">
            Une expression qui peut plaire ou déplaire selon l’angle d’approche, mais qui a
            <br class="hidden sm:inline" /> pour mérite de définir instantanément ce que nous sommes et à quoi nous
            participons.
            <br /><br />
            Nous, les Credit Managers, Responsables Recouvrement, Agents
            <br class="hidden sm:inline" /> de Recouvrement, Gestionnaires de Litiges, Enquêteurs, Analystes Credit,
            <br class="hidden sm:inline" /> Créateurs de logiciels de Recouvrement, Assureurs Credit, Formateurs,
            <br class="hidden sm:inline" /> Encaisseurs, Spécialistes de l’Affacturage, Brokers, Etc.
            <br /><br />
            Nous contribuons au bon déroulement des transactions contractuelles. Nous sécurisons
            <br class="hidden sm:inline" /> les échanges économiques. Nos actions, tant préventives que
            <br class="hidden sm:inline" /> curatives, visent à faire en sorte que les droits et les obligations des Parties soient respectées.
            </p>
        </div>
        <div class="grid lg:grid-cols-2 flex lg:mt-[30px] px-4 lg:px-[30px] py-6 lg:py-[50px] mt-5">
            <div class="mb-5">
                <div class="w-[80px] p-[20px] rounded-[30px] bg-[white] hover:text-[white] mb-5">
                    <img class="" src="../assets/images/icons2/Property 1=Default.png" alt="">
                </div>
                <p class="hover:text-[#43BD74] my-1 text-[18px font-family[metropolis] font-extrabold]">
                    Recherche
                </p>
                <p class="my-1 text-[14px font-family[metropolis] opacity-[53%]">
                    Rechercher un professionnel du secteur
                </p>
                <nuxt-link to="#">
                    <div class="mt-5 flex justify-between items-center w-[81px]">
                        <p class="text-[#43BD74] text-[12px] ">Voir plus</p>
                        <img src="../assets/images/Vector1.png" alt="">
                    </div>
                </nuxt-link>
            </div>
            <div class="mb-5">
                <div class="w-[80px] p-[20px] rounded-[30px] bg-[#43BD74] hover:text-[white] mb-5">
                    <img class="" src="../assets/images/icons2/Property 1=Variant2.png" alt="">
                </div>
                <p class="hover:text-[#43BD74] my-1 text-[18px font-family[metropolis] font-extrabold]">
                    Connaissance
                </p>
                <p class="my-1 text-[14px font-family[metropolis] opacity-[53%]">
                    Rencontres, formations <br> certifiantes ...
                </p>
                <nuxt-link to="#">
                    <div class="mt-5 flex justify-between items-center w-[81px]">
                        <p class="text-[#43BD74] text-[12px] ">Voir plus</p>
                        <img src="../assets/images/Vector1.png" alt="">
                    </div>
                </nuxt-link>
            </div>
            <div class="mb-5">
                <div class="w-[80px] p-[20px] rounded-[30px] bg-[white] hover:text-[white] mb-5">
                    <img class="" src="../assets/images/icons2/Property 1=Variant3.png" alt="">
                </div>
                <p class="hover:text-[#43BD74] my-1 text-[18px font-family[metropolis] font-extrabold]">
                    Actualités
                </p>
                <p class="my-1 text-[14px font-family[metropolis] opacity-[53%]">
                    Retrouver ici les outils et les<br> actualités secteur
                </p>
                <nuxt-link to="#">
                    <div class="mt-5 flex justify-between items-center w-[81px]">
                        <p class="text-[#43BD74] text-[12px] ">Voir plus</p>
                        <img src="../assets/images/Vector1.png" alt="">
                    </div>
                </nuxt-link>
            </div>
            <div class="mb-5">
                <div class="w-[80px] p-[20px] rounded-[30px] bg-[white] hover:text-[white] mb-5">
                    <img class="" src="../assets/images/icons2/Property 1=Variant4.png" alt="">
                </div>
                <p class="hover:text-[#43BD74] my-1 text-[18px font-family[metropolis] font-extrabold]">
                    Emplois
                </p>
                <p class="my-1 text-[14px font-family[metropolis] opacity-[53%]">
                    Publier vos annonces, consulter les opportunités
                </p>
                <nuxt-link to="#">
                    <div class="mt-5 flex justify-between items-center w-[81px]">
                        <p class="text-[#43BD74] text-[12px] ">Voir plus</p>
                        <img src="../assets/images/Vector1.png" alt="">
                    </div>
                </nuxt-link>
            </div>
        </div>

      </div>

</template>
<script setup>

</script>

<template>
  <main>
    <!-- intro -->
    <div class="h-[400px] tb:h-[560px] md:h-[680px] w-full flex flex-col md:flex-row">
      <div class="bg-brown2 w-full md:w-5/12 flex flex-col justify-center p-8 py-16 tb:py-20 tb:px-8 md:px-12">
        <p class="text-[32px] tb:text-[42px] md:text-[48px] leading-none font-bold text-left seablue m-0 mb-4">Welcome
          to County International School
        </p>
        <router-link to="/about" title="About" class="font-medium text-[18px] seablue underline">About Our
          School</router-link>
      </div>
      <div class="w-full md:w-7/12">
        <img src="@/assets/images/image7.jpeg" alt="school-image" class="w-full object-cover h-full">
      </div>
    </div>
    <!--  -->
    <div class="h-full tb:h-[480px] md:h-[600px] flex flex-col tb:flex-row">
      <div class="bg-seablue w-full tb:w-1/2 flex">
        <img src="@/assets/images/image6.jpeg" alt="school-image" class="object-fill tb:px-8 md:px-16 py-20">
      </div>
      <div class="bg-bluelight w-full tb:w-1/2 flex flex-col justify-center p-8 tb:px-12 md:px-20">
        <p class="text-[22px] tb:text-[30px] md:text-[42px] leading-none font-bold text-left blue1  my-4">Education
          with Safety First</p>
        <p class="text-[16px] tb:text-[18px] blue1 mb-4">At County International School, we prioritize safety. Our full
          reopening plans
          for the year include a learning model to ensure the well-being of our students and staff.</p>
        <router-link to="/#" title="About" class="font-medium text-[16px] tb:text-[18px] blue1 underline">Learn
          More</router-link>
      </div>
    </div>

    <!-- advantage -->
<!-- advantage -->
<div class="advantage">
  <h3 class="text-xl sm:text-2xl md:text-4xl font-bold px-4 sm:px-8 my-8 md:my-16 blue1 text-center">Discover the CIS Advantage</h3>
  
  <!-- grids -->
  <!-- row 1 -->
  <div class="flex flex-col sm:flex-row justify-center" id="row1">
    <div class="w-full sm:w-1/2 md:w-8/12 h-[400px] sm:h-[480px] md:h-[560px] bg-[url('@/assets/images/image5.jpeg')] bg-cover bg-center">
      <div class="p-6 md:p-12 bg-black bg-opacity-30 w-full h-full flex flex-col justify-center">
        <p class="text-white text-2xl sm:text-3xl font-medium">Our Approach</p>
        <p class="w-full sm:w-2/3 text-base sm:text-lg md:text-xl mt-4 sm:mt-8 text-white">County International School offers
          Montessori for pre-school and a British/American curriculum for primary education. Our approach focuses on holistic development and
          personalized learning.</p>
        <router-link to="/#" title="About" class="font-medium text-base sm:text-lg text-white underline mt-4 sm:mt-8">Learn
          More</router-link>
      </div>
    </div>
    <div class="admission-text bg-red1 w-full sm:w-1/2 md:w-4/12 p-6 sm:p-8 md:p-12 h-[400px] sm:h-[480px] md:h-[560px] flex flex-col justify-center">
      <p class="text-white text-2xl sm:text-3xl font-medium">Admission</p>
      <p class="w-full sm:w-10/12 md:w-8/12 font-light my-4 sm:my-8 text-white">Experience the difference at County International School. Enroll
        your child today to provide them with a world-class education.</p>
      <router-link to="/#" title="About" class="font-medium text-base sm:text-lg text-white underline">Enroll
        Today</router-link>
    </div>
  </div>
  
  <!-- row 2 -->
  <div class="flex flex-col md:flex-row justify-center h-auto" id="row2">
    <div class="enhance w-full md:w-1/3 h-[400px] sm:h-[500px] md:h-[560px] bg-[url('@/assets/images/kid-hand.webp')] bg-cover">
      <div class="p-6 sm:p-8 md:p-12 bg-black bg-opacity-30 w-full h-full flex flex-col justify-center">
        <div class="md:w-4/5">
          <p class="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 sm:mb-8">Enhance Learning</p>
          <p class="text-white mb-4 md:mb-8">Our dedicated programs and activities are designed to enhance learning and
            foster creativity, critical thinking, and problem-solving skills in our students.</p>
          <router-link to="/#" title="About" class="font-medium text-base sm:text-lg text-white underline">View
            Programs</router-link>
        </div>
      </div>
    </div>
    <!-- news -->
    <div class="news w-full md:w-1/3 bg-red2 bg-cover p-6 sm:p-8 md:p-12 h-[400px] sm:h-[500px] md:h-[560px] flex flex-col justify-center">
      <div class="md:w-4/5">
        <p class="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 md:mb-8">Latest News & Events</p>
        <p class="text-white mb-4 md:mb-8">Stay updated with the latest news, events, and happenings at County International
          School. Join us in our journey of providing quality education for all.</p>
        <router-link to="/#" title="About" class="font-medium text-base sm:text-lg text-white underline">View
          News</router-link>
      </div>
    </div>
    <!-- image -->
    <div class="enhance w-full md:w-1/3 bg-[url('@/assets/images/kids-face.webp')] bg-cover h-[400px] sm:h-[500px] md:h-[560px]">
    </div>
  </div>
  
  <!-- row 3 -->
  <div class="flex flex-col md:flex-row justify-start h-auto" id="row3">
    <!-- parents -->
    <div class="news w-full md:w-1/3 bg-brown1 bg-cover p-6 sm:p-8 md:p-12 h-[400px] sm:h-[500px] md:h-[560px] flex flex-col justify-center">
      <div class="md:w-4/5">
        <p class="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-4 md:mb-8">For the Parents</p>
        <p class="text-white mb-4 sm:mb-8">We understand the importance of parental involvement. Get informed about our educational approach, events, 
          and your child's progress at County International School.</p>
        <router-link to="/#" title="About" class="font-medium text-base sm:text-lg text-white underline">Parent
          Resources</router-link>
      </div>
    </div>
    <!-- image -->
    <div class="enhance w-full md:w-1/3 bg-[url('@/assets/images/kid-red.webp')] bg-cover h-[400px] sm:h-[500px] md:h-[560px]">
    </div>
  </div>
</div>

    <!-- GIS in Numbers -->
    <section class="">
      <h3 class="text-4xl blue1 my-8 tb:my-16 font-bold">GIS in Numbers</h3>
      <section class="bg-bluelight p-0">
        <!-- Grid Container -->
        <div class="">
          <!-- row 1 -->
          <div class="flex flex-col tb:flex-row">
            <!-- 1st -->
            <div
              class="flex flex-col tb:w-1/3 justify-center items-center bg-bluelight p-6 border border-1 border-black h-80">
              <img src="@/assets/icons/trophy.svg" alt="Trophy Icon" class="h-16 mb-4">
              <p class="text-blue1 text-[56px] font-bold">10</p>
              <p class="text-blue1 text-[16px]">Years of Excellence</p>
            </div>
            <!-- 2nd -->
            <div
              class="flex flex-col tb:w-1/3 justify-center items-center bg-bluelight p-6  border border-1 border-black h-80">
              <img src="@/assets/icons/student.svg" alt="Graduation Icon" class="h-16 mb-4">
              <p class="text-blue1 text-[56px] font-bold">95</p>
              <p class="text-blue1 text-[16px]">Nationalities Represented</p>
            </div>
            <!-- First Row: 3 Stats -->
            <div
              class="flex flex-col  tb:w-1/3 justify-center  items-center bg-bluelight p-6  border border-1 border-black h-80">
              <img src="@/assets/icons/language-board.svg" alt="Languages Icon" class="h-16 mb-4">
              <p class="text-blue1 text-[56px] font-bold">50+</p>
              <p class="text-blue1 text-[16px]">Languages Spoken</p>
            </div>
          </div>
          <!-- row 2 -->
          <div class="flex flex-col tb:flex-row">
            <!-- Third Row: 2 Stats -->
            <div
              class="flex flex-col tb:w-1/3 justify-center  items-center bg-bluelight p-6  border border-1 border-black h-80">
              <img src="@/assets/icons/ribbon.svg" alt="Ribbon Icon" class="h-16 mb-4">
              <p class="text-blue1 text-[56px] font-bold">100<span class="text-blue1 text-[28px]">%</span></p>
              <p class="text-blue1 text-[16px]">Parent Satisfaction</p>
            </div>

            <!-- Second Row: 1 Image -->
            <div class=" tb:w-1/3 flex   justify-center bg-bluelight border border-1 border-black h-80 h-80">
              <img src="@/assets/images/image11.jpeg" alt="Kids in school" class=" object-fill h-80 w-full">
            </div>

            <div
              class="flex flex-col tb:w-1/3 justify-center items-center bg-bluelight p-6  border border-1 border-black h-80">
              <img src="@/assets/icons/basketball.svg" alt="Basketball Icon" class="h-16 mb-4">
              <p class="text-blue1 text-[56px] font-bold">80<span class="text-blue1 text-[28px]">%</span></p>
              <p class="text-blue1 text-[16px]">Students Engaged in Co-Curricular Activities</p>
            </div>
          </div>

        </div>
      </section>
    </section>

  </main>
</template>

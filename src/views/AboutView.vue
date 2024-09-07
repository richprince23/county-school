<template>
    <!-- Welcome Section -->
    <section class="flex flex-col md:flex-row">
      <!-- about -->
      <div class="w-full md:w-1/2 bg-bluelight p-6 md:p-12 lg:p-24 mb-8">
        <h3 class="text-2xl tb:text-3xl md:text-4xl lg:text-6xl font-bold w-full tb:py-12 md:py-6 md:w-10/12 lg:w-8/12 mx-auto">Welcome to County International School</h3>
        <p class="text-base tb:text-xl my-4 md:my-8 w-full md:w-10/12 lg:w-8/12 mx-auto">County International School is a new international school for pre-school and primary education. It offers Montessori for pre-school and British/American curriculum for the primary school.</p>
      </div>
      <div class="img-div w-full md:w-1/2 h-auto">
        <img src="@/assets/images/kid-bag.webp" alt="" class="object-cover w-full h-full">
      </div>
    </section>
  
    <!-- Messages Section -->
    <section class="flex flex-col md:flex-row">
      <!-- principal message -->
      <div class="principal w-full md:w-1/2 flex flex-col p-6 md:p-12 lg:p-32 bg-orange1">
        <div class="w-64 h-52 mt-12 md:w-48 md:h-80 md:w-auto mx-auto md:mx-0">
          <img src="@/assets/images/CEO.webp" alt="Principal" class="w-full h-full object-cover ">
        </div>
        <h4 class="text-xl tb:text-2xl md:text-3xl font-bold my-4 md:my-8">Principal's Welcome</h4>
        <p class="text-base tb:text-xl">Welcome to County International School, a place where we strive to provide a nurturing and innovative learning environment for our students. Our aim is to instill a love for learning and exploration while fostering a sense of community and global awareness. We believe in the holistic development of each child, and we are committed to providing a platform for them to flourish academically, socially, and emotionally.</p>
      </div>
      <!-- mission -->
      <div class="mission w-full md:w-1/2 bg-orangelight p-6 md:p-12 lg:p-32">
        <img src="@/assets/images/mission.webp" alt="Kids holding hands" class="w-full h-48 object-cover mb-4">
        <h4 class="text-xl tb:text-2xl md:text-3xl font-bold my-4 md:my-8">Mission</h4>
        <p class="text-base tb:text-xl">At County International School, we are guided by the principles of respect, responsibility, integrity, compassion, and courage. These values form the foundation of our educational approach and are integrated into every aspect of our school's culture and curriculum.</p>
      </div>
    </section>
  
    <!-- Core Values Section -->
    <section class="bg-bluelight p-6 md:p-12 lg:p-32 flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
        <h3 class="text-xl tb:text-2xl md:text-3xl font-bold mb-4 md:mb-8">Vision & Values</h3>
        <p class="red1 font-bold text-3xl md:text-4xl lg:text-6xl">Our Core Values</p>
      </div>
      <!-- vision statement -->
      <div class="w-full md:w-1/2 leading-loose">
        <p class="text-base tb:text-xl">At <b>County International School</b>, we are committed to educating the whole person (Cura personalis) by fostering an engaging and diverse learning community of educational excellence and relevancy. We do this with nationally recognized programs and innovative curricula, dedicated staff informed by balanced teaching supported by local and global partnerships. County also strives to develop socially responsible, intellectually curious, ethical, and compassionate global business leaders who excel in their careers and lead meaningful lives.</p>
      </div>
    </section>
  

   <!-- Faculty and staff -->

   <section class="bg-orange1 p-8 md:p-20">
    <!-- head info -->
    <div class="head-info w-full md:w-8/12">
        <h3 class="font-bold text-xl tb:text-2xl md:text-3xll">Faculty & Staff</h3>
        <p class="text-base tb:text-xl">Meet the dedicated and passionate team at County International School who are committed to providing an exceptional educational experience for our students.</p>
    </div>

   <!-- staff row 1 -->
<div class="flex flex-col md:flex-row mt-8">
    <!-- staff 1 -->
    <div class="img-box mx-auto mt-8 md:mt-0 h-96 bg-[url('@/assets/images/emily.webp')] bg-cover bg-start bg-no-repeat w-full tb:w-1/2 md:w-1/3 flex flex-col justify-end text-white">
      <div class="bg-blue1  tb:w-10/12  mx-8 md:mb-8 p-4">
        <p class="text-base tb:text-xl font-bold">Emily Cole</p>
        <p class="text-2xl mb-4">Head of School</p>
        <a href="mailto:emily.cole@gischool.com" class="text-base underline">emily.cole@gischool.com</a>
      </div>
    </div>
    <!-- staff 2 -->
    <div class="img-box mx-auto mt-8 md:mt-0 h-96 bg-[url('@/assets/images/adam.webp')] bg-cover bg-start bg-no-repeat w-full tb:w-1/2 md:w-1/3 flex flex-col justify-end">
      <div class="bg-bluelight tb:w-10/12  mx-8 md:mb-8 p-4">
        <p class="text-base tb:text-xl font-bold">Adam Ginzberg</p>
        <p class="text-2xl mb-4">Principal Pre-K & K</p>
        <a href="mailto:adam.ginzberg@gischool.com" class="text-base underline">adam.ginzberg@gischool.com</a>
      </div>
    </div>
    <!-- staff 3 -->
    <div class="img-box mx-auto mt-8 md:mt-0 h-96 bg-[url('@/assets/images/kelly.webp')] bg-cover bg-start bg-no-repeat w-full tb:w-1/2 md:w-1/3 flex flex-col justify-end text-white">
      <div class="bg-blue1 tb:w-10/12  mx-8 md:mb-8 p-4">
        <p class="text-base tb:text-xl font-bold">Kelly Carmen</p>
        <p class="text-2xl mb-4">Grades 1-3</p>
        <a href="mailto:kelly.carmen@gischool.com" class="text-base underline">kelly.carmen@gischool.com</a>
      </div>
    </div>
  </div>
  
  <!-- staff row 2 -->
  <div class="flex flex-col md:flex-row ">
    <!-- staff 4 -->
    <div class="img-box mx-auto mt-8 md:mt-0 h-96 bg-[url('@/assets/images/alex.webp')] bg-cover bg-start bg-no-repeat w-full tb:w-1/2 md:w-1/3 flex flex-col justify-end text-white">
      <div class="bg-blue1 tb:w-10/12 mx-8 md:mb-8 p-4">
        <p class="text-base tb:text-xl font-bold">Alex T. Yang</p>
        <p class="text-2xl mb-4">Grades 4-6</p>
        <a href="mailto:alex.yang@gischool.com" class="text-base underline">alex.yang@gischool.com</a>
      </div>
    </div>
    <!-- staff 5 -->
    <div class="img-box mx-auto mt-8 md:mt-0 h-96 bg-[url('@/assets/images/aiden.webp')] bg-cover bg-start bg-no-repeat w-full tb:w-1/2 md:w-1/3 flex flex-col justify-end">
      <div class="bg-bluelight tb:w-10/12  mx-8 md:mb-8 p-4">
        <p class="text-base tb:text-xl font-bold">Aiden Henderson</p>
        <p class="text-2xl mb-4">Admissions Director</p>
        <a href="mailto:aiden.henderson@gischool.com" class="text-base underline">aiden.henderson@gischool.com</a>
      </div>
    </div>
    <!-- staff 6 -->
    <div class="img-box mx-auto mt-8 md:mt-0 h-96 bg-[url('@/assets/images/johnson.webp')] bg-cover bg-start bg-no-repeat w-full tb:w-1/2 md:w-1/3 flex flex-col justify-end text-white">
      <div class="bg-blue1 tb:w-10/12  mx-8 md:mb-8 p-4">
        <p class="tb:text-base tb:text-xl font-bold">Johnson, Timothy D.</p>
        <p class="tb:text-2xl mb-4">Financial Advisor</p>
        <a href="mailto:trent.roman@gischool.com" class="text-base underline">trent.roman@gischool.com</a>
      </div>
    </div>
  </div>
  
   </section>
</template>


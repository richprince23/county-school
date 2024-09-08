<template>
  <!-- admission -->
  <section class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 bg-bluelight p-6 md:p-24">
      <h3 class="text-4xl md:text-6xl font-bold w-full md:w-8/12 mx-auto">Admissions</h3>
      <p class="text-sm md:text-base my-4 md:my-8 w-full md:w-8/12 mx-auto">Welcome to County International School, a new international for pre-school and primary education. 
        We offer the Montessori program for pre-school and the British/American curriculum for primary school. Our institution is dedicated to providing 
        quality education to students, nurturing their individual talents and skills. At County International School, we believe in 'Education for All' and 
        strive to create a supportive and inclusive learning environment for all our students.
      </p>
    </div>
    <div class="img-div w-full md:w-1/2 h-64 md:h-auto">
      <img src="@/assets/images/kids-hands.webp" alt="" class="object-cover w-full h-full">
    </div>
  </section>

  <!-- application details -->
  <section class="flex flex-col md:flex-row mt-4 md:mt-8">
    <!-- principal message -->
    <div class="principal w-full md:w-1/2 flex flex-col p-6 md:p-32 bg-orangelight justify-center">
      <h4 class="text-2xl md:text-3xl font-bold my-4 md:my-8">How to Apply</h4>
      <p class="text-sm md:text-base leading-relaxed md:leading-loose">Applying to County International School is a simple and straightforward process. Our admissions team is here to guide you through
         each step and answer any queries you may have. We understand the importance of choosing the right educational institution for your child, and we are committed 
         to providing all the necessary information to help you make an informed decision. Whether you are interested in our Montessori program or the British/American 
         curriculum for primary school, we are here to support you.
      </p>
    </div>
    <!-- tuition -->
    <div class="mission w-full md:w-1/2 bg-orange1 p-6 md:p-32">
      <h4 class="text-2xl md:text-3xl font-bold my-4 md:my-8">Tuition</h4>
      <p class="text-sm md:text-base leading-relaxed md:leading-loose">At County International School, we are guided by the principles of respect, responsibility, integrity, compassion, and courage. 
          These values form the foundation of our educational approach and are integrated into every aspect of our school's culture and curriculum.
      </p>
      <div class="flex flex-col tb:flex-row justify-between my-6 md:my-12">
        <a href="/assets/sample.pdf" class="font-bold underline mb-2 tb:mb-0">Tuition & Fees</a>
        <a href="/assets/sample.pdf" class="font-bold underline">Student Billing</a>
      </div>
    </div>
  </section>

  <!-- faqs -->
  <!-- <section class="flex flex-col md:flex-row my-4 md:my-8">

    <div class="w-full md:w-1/2 bg-bluelight p-6 md:p-24">
      <h3 class="text-2xl md:text-3xl font-bold mx-auto mb-2 md:mb-4">FAQ</h3>
      <h3 class="text-lg md:text-xl font-bold mx-auto">Frequently Asked Questions</h3>
      <div class="my-4 md:my-8">

        <div class="border-b">
          <button @click="toggleFAQ(0)" class="w-full text-left py-3 md:py-4 font-semibold text-blue1">
            What is an FAQ section?
            <span v-if="activeIndex === 0" class="float-right">−</span>
            <span v-else class="float-right">+</span>
          </button>
          <div v-if="activeIndex === 0" class="py-2">
            <p class="text-sm md:text-base">
              FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.
            </p>
          </div>
        </div>


        <div class="border-b">
          <button @click="toggleFAQ(1)" class="w-full text-left py-3 md:py-4 font-semibold text-blue1">
            Why do FAQs matter?
            <span v-if="activeIndex === 1" class="float-right">−</span>
            <span v-else class="float-right">+</span>
          </button>
          <div v-if="activeIndex === 1" class="py-2">
            <p class="text-sm md:text-base">
              FAQs help improve user experience by giving quick answers, reducing support time, and boosting SEO with relevant content.
            </p>
          </div>
        </div>


        <div class="border-b">
          <button @click="toggleFAQ(2)" class="w-full text-left py-3 md:py-4 font-semibold text-blue1">
            Where can I add my FAQs?
            <span v-if="activeIndex === 2" class="float-right">−</span>
            <span v-else class="float-right">+</span>
          </button>
          <div v-if="activeIndex === 2" class="py-2">
            <p class="text-sm md:text-base">You can add FAQs in your website's admin panel or by updating the FAQ section of your CMS.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="img-div w-full md:w-1/2 h-64 md:h-auto">
      <img src="@/assets/images/kids-glass.webp" alt="" class="object-cover w-full h-full">
    </div>
  </section> -->
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

// function to toggle faq items
const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>
<template>
  <section class="">
    <div class="flex flex-col md:flex-row">
      <!-- info section -->
      <div class="info-section p-12 flex flex-col tb:justify-around tb:flex-row w-full md:w-1/2">
        <!-- address -->
        <div class="address  my-4 w-full tb:w-2/3">
          <h5 class="text-2xl font-bold blue1 mb-4">County International School</h5>
          <p class="text-[14px] blue1">Opposite Mustapha Real Estate</p>
          <p class="text-[14px] blue1">Potsin, Winneba</p>
          <p class="text-[14px] blue1">Central Region, Ghana</p>
          <p class="text-[14px] blue1">globalinternationalschool@yahoo.com</p>
        </div>
        <!-- community -->
        <div class="community my-4">
          <h5 class="text-2xl font-bold blue1 mb-4">Join the Community </h5>
          <a class="text-[20px] blue1">Facebook</a>
          <p class="text-[20px] blue1">Twitter</p>
          <p class="text-[20px] blue1">YouTube</p>
          <p class="text-[20px] blue1">Instagram</p>
        </div>
      </div>
      <!-- contact session -->
      <div class="w-full md:w-1/2 p-12 my-4">
        <div class="w-full tb:w-8/12 mx-auto">
          <h2 class="blue1 font-bold text-2xl mb-4">Contact</h2>
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Name Fields -->
            <div class="flex gap-4">
              <input type="text" v-model="firstName" placeholder="First Name"
                class="border-b border-gray-300 p-3 w-full focus:border-b-2 focus:border-blue-500 focus:outline-0focus:border-b-2 focus:border-blue-500 focus:outline-0" />
              <input type="text" v-model="lastName" placeholder="Last Name"
                class="border-b border-gray-300 p-3 w-full focus:border-b-2 focus:border-blue-500 focus:outline-0" />
            </div>
  
            <!-- Email -->
            <input type="email" v-model="email" placeholder="Email *"
              class="border-b border-gray-300 p-3 w-full focus:border-b-2 focus:border-blue-500 focus:outline-0" />
  
            <!-- Subject -->
            <input type="text" v-model="subject" placeholder="Subject"
              class="border-b border-gray-300 p-3 w-full focus:border-b-2 focus:border-blue-500 focus:outline-0" />
  
            <!-- Message -->
            <textarea v-model="message" placeholder="Leave us a message..." rows="5"
              class="border-b border-gray-300 p-3 w-full focus:border-b-2 focus:border-blue-500 focus:outline-0"></textarea>
  
            <!-- Submit Button -->
            <button type="submit" class="bg-red1 text-white px-6 py-3  hover:bg-red2">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');

const submitForm = () => {
  // form submission logic here
  console.log({
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: subject.value,
    message: message.value
  });
};
</script>
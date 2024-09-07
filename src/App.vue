<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppBar from './components/AppBar.vue';
import FooterView from './components/FooterView.vue';

</script>

<template>
  <main class="mx-16">
    <AppBar/>

    <RouterView />
    <FooterView/>
  </main>

</template>


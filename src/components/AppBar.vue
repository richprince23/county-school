<template>
  <header class="app-bar">
    <!-- Logo Section -->
    <router-link to="/" class="logo-container">
      <img src="@/assets/images/logo.jpeg" alt="School Logo" class="logos h-[90px] mr-4" />
      <h1 class="text-lg md:text-2xl">
        County <br />
        International <br />
        School
      </h1>
    </router-link>

    <nav :class="['nav-links ml-auto', isMenuOpen ? 'block' : 'hidden', 'md:flex']">
      <ul class="flex flex-col md:flex-row">
        <RouterLink 
          to="/about" 
          title="About" 
          class="mx-3 py-2 text-center md:py-0 hover:brown1 blue1" 
          active-class="active-link">
          About
        </RouterLink>
        <RouterLink 
          to="/admissions" 
          title="Admissions" 
          class="mx-3 py-2 text-center md:py-0 hover:brown1 blue1" 
          active-class="active-link">
          Admissions
        </RouterLink>
        <RouterLink 
          to="/learning" 
          title="Learning" 
          class="mx-3 py-2 text-center md:py-0 hover:brown1 blue1" 
          active-class="active-link">
          Learning
        </RouterLink>
      </ul>
    </nav>

    <!-- Mobile Menu Button -->
    <button @click="toggleMenu" class="menu-btn block md:hidden ml-4">
      <i><img src="@/assets/icons/menu-icon.svg" alt=""></i>
    </button>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// State for toggling mobile menu
const isMenuOpen = ref(false);

// Function to toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.app-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logos {
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #14284b; /* Adjust color as per logo */
}

/* Hide menu button on larger screens */
.menu-btn {
  font-size: 1.5rem;
  cursor: pointer;
  color: #14284b;
}

/* Navigation Links */
.nav-links {
  margin-left: auto; /* Push nav links to the right */
}

/* Active Link Styling */
.active-link {
  font-weight: bold;
  color: #8B4513; /* Brown color for active link */
}

/* Media Queries */
@media (min-width: 768px) {
  .nav-links {
    display: flex;
  }

  .menu-btn {
    display: none; /* Hide on medium and larger screens */
  }
}
</style>
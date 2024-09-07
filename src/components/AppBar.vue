<template>
    <header class="app-bar">
      <div class="logo-container">
        <img src="@/assets/images/logo.jpeg" alt="School Logo" class="logos h-[90px] mr-4"/>
        <h1>County <br>
            International <br> 
            School</h1>
      </div>
      <nav class="nav-links">
        <ul class="flex ">
          <RouterLink to="/about" title="About" class="mx-3 hover:brown1 blue1">About</RouterLink>
          <RouterLink to="/admissions" title="Admissions" class="mx-3 hover:brown1 blue1">Admissions</RouterLink>
          <RouterLink to="/learning" title="Learning" class="mx-3 hover:brown1 blue1 ">Learning</RouterLink>
        </ul>
      </nav>
    </header>
  </template>
  
  <script setup>
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
  
  .logo {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
  
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #14284B; /* Adjust color as per logo */
  }
  
  .nav-links ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-links li {
    margin-left: 20px;
  }
  
  
  </style>
  
<!-- TEMPLATE -->
<template>

  <nav class="nav">
    <div class="logo-container">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
    </div>
    <div class="menu-container">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Users' }">Users</router-link> 
      <router-link :to="{ name: 'Pictures' }">Pictures</router-link> 
    </div>
    <div>
      <input class="search-bar" type="text" placeholder="Search a user...">
    </div>
  </nav>

  <router-view/>

  <footer class="footer">
    
  </footer>
  
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLE -->
<style src="./styles/css/app.css"></style>

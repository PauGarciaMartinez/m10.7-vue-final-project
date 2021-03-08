<!-- TEMPLATE -->
<template>

  <nav class="nav">
    <div class="logo-container">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
    </div>
    <div class="menu-container">
      <router-link :to="{ name: 'Home', params: { usersConsulted: JSON.stringify(usersConsulted), albumsConsulted: JSON.stringify(albumsConsulted) }}">Home</router-link>
      <router-link :to="{ name: 'Users' }">Users</router-link> 
      <router-link :to="{ name: 'Pictures' }">Pictures</router-link> 
    </div>
    <div class="search-container">
    <div class="blanket" v-if="list" @click="list = false"></div>
      <div class="list-container">
        <input 
          class="search-bar" 
          type="text" 
          placeholder="Search a user..."
          v-model="input"
          @focus="list = true">
        <Autocomplete :inputSearch="input" @setInput="updateInput" :resultsList="list" @add-single-user="userUp"/>
      </div>
      <router-link class="router-link" :to="{ name: 'Users', params: { inputSearch: input }}">
        <button class="search-btn">Search</button>
      </router-link> 
    </div>
  </nav>
    
  <router-view v-slot="{ Component }" @add-user-consulted="userUp" @add-album-consulted="albumUp">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <footer class="footer">
    <p>Created by Pau Garcia</p>
  </footer>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./scripts/app.js"></script>

<!-- STYLE -->
<style src="./styles/css/app.css"></style>

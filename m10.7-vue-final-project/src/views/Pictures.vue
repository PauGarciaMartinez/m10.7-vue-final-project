<!-- TEMPLATE -->
<template>
  
  <header>
    <h1>Albums</h1>
  </header>

  <section v-if="error">
    <p>{{ error }}</p>
  </section>

  <section class="albums-wrapper">
    <article class="album-container" v-for="album in albums" :key="album.albumId">
      <p class="album-name">{{ album.title }}</p>
      <router-link :to="{ name: 'PictureDetails', params: { id: album.id }}">
        <button class="album-btn">See pictures</button>
      </router-link>
    </article>
  </section>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/pictures.js"></script>

<!-- STYLE -->
<style src="./../styles/css/pictures.css"></style>
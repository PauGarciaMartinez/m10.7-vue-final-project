<!-- TEMPLATE -->
<template>

  <header>
    <h1>Home</h1>
  </header>

  <section class="consulted-wrapper">

    <article class="consulted-container">
      <h3>Users consulted</h3>
      <div class="data-container" v-for="user in usersVisited" :key="user">
        <p>{{ user.name }}</p>
        <p><strong>{{ user.clicks }}</strong></p>
      </div>
    </article>

    <article class="consulted-container">
      <h3>Albums consulted</h3>
      <div class="data-container" v-for="album in albumsVisited" :key="album">
        <p>{{ `Album ${album.albumId}` }}</p>
        <p><strong>{{ album.clicks }}</strong></p>
      </div>
    </article>

  </section>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/home.js"></script>

<!-- STYLE -->
<style src="./../styles/css/home.css"></style>
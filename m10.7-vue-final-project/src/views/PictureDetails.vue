<!-- TEMPLATE -->
<template>

  <button @click="goBack" class="back-btn">Go back</button>

  <header>
    <h1>Pictures</h1>
  </header>

  <section v-if="error">
    <p>{{ error }}</p>
  </section>

  <section v-if="album" class="pictures-wrapper">
    <article class="picture-container" v-for="picture in album" :key="picture.id">
      <p class="picture-name">{{ picture.id }}</p>
    </article>
  </section>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/picture-details.js"></script>

<!-- STYLE -->
<style src="./../styles/css/picture-details.css"></style>
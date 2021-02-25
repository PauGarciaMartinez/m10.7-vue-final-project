<!-- TEMPLATE -->
<template>

  <header>
    <h1>Users</h1>
  </header>

  <section v-if="error">
    <p>{{ error }}</p>
  </section>

  <section class="users-wrapper">
    <article class="user-container" v-for="user in users" :key="user.id">
      <p class="user-name">{{ user.name }}</p>
      <route-link>
        <button class="user-btn">More info</button>
      </route-link>
    </article>
  </section>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/users.js"></script>

<!-- STYLE -->
<style src="./../styles/css/users.css"></style>
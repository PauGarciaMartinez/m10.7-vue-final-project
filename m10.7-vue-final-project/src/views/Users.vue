<!-- TEMPLATE -->
<template>

  <button @click="goBack" class="back-btn">Go back</button>

  <header>
    <h1>Users</h1>
  </header>

  <section v-if="error">
    <p>{{ error }}</p>
  </section>

  <section class="users-wrapper">
    <article class="user-container" v-for="user in users" :key="user.id">
      <p class="user-name">{{ caps(user.name) }}</p>
      <router-link :to="{ name: 'UserDetails', params: { id: user.id }}" class="router-link">
        <button class="user-btn" @click="addUserConsulted(user)">More info</button>
      </router-link>
    </article>
  </section>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/users.js"></script>

<!-- STYLE -->
<style src="./../styles/css/users.css"></style>
<!-- TEMPLATE -->
<template>
  <div class="search-list">
    <div class="user-list" v-for="user in matchingUsers">
      <p>{{ user.name }}</p>
    </div>
  </div>

</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/autocomplete.js"></script>

<!-- STYLE -->
<style src="./../styles/css/autocomplete.css"></style>
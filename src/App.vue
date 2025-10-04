<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
</script>

<template>
  <nav class="delnav pb-10">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/searchResult">SearchResult</RouterLink>
    <RouterLink to="/searchDetail">SearchDetail</RouterLink>
    <RouterLink to="/rank">Rank</RouterLink>
    <RouterLink to="/addInvoice">AddInvoice</RouterLink>
    <RouterLink to="/service">Service</RouterLink>
  </nav>

  <header class="text-white">header</header>

  <RouterView />

  <footer class="text-white">footer</footer>
</template>

<style scoped>
.delnav {
  width: 100%;
  text-align: center;
  line-height: 2;
}
.delnav a:hover {
  background-color: blue;
}
.delnav a.router-link-exact-active {
  color: yellow;
}

.delnav a.router-link-exact-active:hover {
  background-color: blue;
}

.delnav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid white;
  color: white;
}

.delnav a:first-of-type {
  border: 0;
}
</style>

<template>
  <AppHeader />
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
</script>

<style lang="scss"></style>

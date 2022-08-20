<template>
  <button class="btn" @click="emits('action')"></button>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import global

import { defineEmits } from "vue";

// emits

const emits = defineEmits(["action"]);
</script>

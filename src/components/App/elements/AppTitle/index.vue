<template>
  <div class="title-wrapper">
    <div class="magnetic-area magnetic-size" ref="magnetic"></div>
    <h2 class="title-1">{{ title }}</h2>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import global

import { gsap } from "gsap";
import { defineProps, onMounted, ref } from "vue";

// props

const props = defineProps({
  title: {
    type: String,
  },
});

// magnetic logic

const magnetic = ref(null);

onMounted(() => {
  const mContent = magnetic.value.nextElementSibling;

  function parallaxIt(e, target) {
    const boundingRect = magnetic.value.getBoundingClientRect();
    const relX = e.pageX - boundingRect.left;
    const relY = e.pageY - boundingRect.top;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    gsap.to(target, {
      x: (relX - boundingRect.width / 2) / 10,
      y: (relY - boundingRect.height / 2 - scrollTop) / 10,
      ease: "power1",
      duration: 0.8,
    });
  }

  //  call the function

  function callParallax(e) {
    parallaxIt(e, mContent);
  }

  magnetic.value.addEventListener("mousemove", function (e) {
    callParallax(e);
  });
});
</script>

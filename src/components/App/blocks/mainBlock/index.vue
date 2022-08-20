<template>
  <div class="main-block">
    <div class="bg-elements">
      <div class="circle"></div>
      <div class="animation-text-block">
        <div class="animation-text-1">
          <img src="@/assets/img/animation-text.svg" alt="" />
          <img src="@/assets/img/animation-text.svg" alt="" />
        </div>
        <div class="animation-text-2">
          <img src="@/assets/img/animation-text.svg" alt="" />
          <img src="@/assets/img/animation-text.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="content-block">
      <slot></slot>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

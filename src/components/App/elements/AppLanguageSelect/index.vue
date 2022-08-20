<template>
  <div class="language-select">
    <div class="language-select__btn">
      <img src="@/assets/img/language-select-icon.svg" alt="" />
    </div>

    <template v-for="item in localeItems" :key="item">
      <p
        class="select-item text-1"
        @click="selectLang(item.key)"
        v-if="item.key !== locale"
      >
        {{ item.name }}
      </p>
    </template>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// import global

import { useI18n } from "vue-i18n";
import locales from "@/locales";

// locale logic

const { locale } = useI18n({
  useScope: "global",
  messages: locales,
});

const localeItems = [
  {
    key: "en-US",
    name: "en",
  },
  {
    key: "uk-UK",
    name: "uk",
  },
];

const selectLang = (el) => {
  locale.value = el;
};
</script>

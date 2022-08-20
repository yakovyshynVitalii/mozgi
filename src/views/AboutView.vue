<template>
  <div class="home-page">
    <mainBlock>
      <AppTitle :title="t('About_page')" />
    </mainBlock>
  </div>
</template>

<script setup>
// import components

import mainBlock from "@/components/App/blocks/mainBlock";
import AppTitle from "@/components/App/elements/AppTitle";

// localization

import { useI18n } from "vue-i18n";
import locales from "@/locales";

const { t } = useI18n({
  useScope: "global",
  messages: locales,
});
</script>

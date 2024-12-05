<!-- docs/.vitepress/theme/Layout.vue -->
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
const { Layout } = DefaultTheme
</script>

<template>
   <Layout>
    <!-- <template #aside-outline-after>
      自定义广告区
    </template> -->

    <!-- <template #not-found>
      404 页面
    </template> -->
  </Layout>
</template>
<template>
  <template v-for="(menu, k) in options">
    <q-btn
      v-if="menu.type === 'link'"
      flat
      class="q-ma-md primary-text topnavbutton"
      :outline="menu.outline"
      :rounded="menu.rounded"
      :label="menu.label"
      :icon-right="menu.iconRight"
      :aria-label="menu.ariaLabel"
      :class="menu.class"
      :style="menu.style"
      :key="k"
      @click="scrollPageTo(menu.scrollTo)"
    />
    <q-btn
      v-if="['action'].includes(menu.type)"
      flat
      class="q-ma-md primary-text topnavbutton"
      :outline="menu.outline"
      :rounded="menu.rounded"
      :label="menu.label"
      :icon-right="menu.iconRight"
      :aria-label="menu.ariaLabel"
      :class="menu.class"
      :style="menu.style"
      :key="k"
      @click="toggleLang"
    />
    <q-btn
      v-if="['download'].includes(menu.type)"
      flat
      target="_blank"
      class="q-ma-md primary-text topnavbutton TopNavBtn_download"
      :outline="menu.outline"
      :rounded="menu.rounded"
      :label="menu.label"
      :icon-right="menu.iconRight"
      :aria-label="menu.ariaLabel"
      :class="menu.class"
      :href="menu.link"
      :style="menu.style"
      :key="k"
    />
  </template>
</template>

<script>
import { useI18n } from "vue-i18n";
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  emit: ["toggleLang"],
  setup(props, context) {
    const scrollPageTo = (navEl) => {
      if (navEl) {
        let element = document.querySelector(`${navEl}`);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };
    const { locale } = useI18n({ useScope: "global" });
    function toggleLang() {
      locale.value = locale.value === "en-US" ? "es" : "en-US";
      context.emit("toggleLang", "inDrawer");
    }
    return {
      toggleLang,
      scrollPageTo,
    };
  },
};
</script>

<style>
.leftDrawer .TopNavBtn_download {
  width: 87%;
}
</style>

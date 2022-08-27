<template>
  <q-header
    :elevated="elevated"
    class="transparent fixed-top"
    ref="refHead"
    id="topHeader"
  >
    <q-toolbar :class="toolbarClass" class="topToolBar">
      <!--
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        -->

      <q-toolbar-title
        class="primary-text text-h2 q-pt-md q-ml-xl text-weight-bold"
      >
        Drú
      </q-toolbar-title>
      <q-space />
      <template v-for="(menu, k) in topNavMenu">
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
          @click="lang.toggleLang()"
        />
        <q-btn
          v-if="['download'].includes(menu.type)"
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
      </template>
    </q-toolbar>
  </q-header>
</template>

<script>
import { onMounted, ref } from "vue";
import { useLanguageStore } from "stores/language";

export default {
  name: "HeaderComponent",
  setup() {
    const lang = useLanguageStore();
    const refHead = ref(null);
    const elevated = ref(false);
    const toolbarClass = ref("");
    // detect when is scrolling down to change the class of the header
    onMounted(() => {
      window.addEventListener("scroll", () => {
        const topHeader = document.querySelector("#topHeader");
        if (window.scrollY > 50) {
          elevated.value = true;
          toolbarClass.value = "bg-dark";
        } else {
          elevated.value = false;
          toolbarClass.value = "";
        }
      });
    });

    const topNavMenu = ref([
      {
        label: "Sobre Drú",
        type: "link",
        // icon: "list",
        scrollTo: "#dru",
      },
      {
        label: "Portafolio",
        type: "link",
        // icon: "list",
        scrollTo: "#portafolio",
      },
      {
        label: "Mis Servicios",
        type: "link",
        // icon: "list",
        scrollTo: "#servicios",
      },
      {
        label: "Contáctame",
        type: "link",
        // icon: "list",
        scrollTo: "#contactame",
      },
      {
        label: "Descargar CV",
        type: "download",
        iconRight: "fa-solid fa-cloud-arrow-down",
        outline: true,
        rounded: true,
        class: "bg-white text-primary text-weight-bold",
        style: "border: 4px solid #ea4747",
      },
      {
        label: "ES",
        type: "action",
        class: "bg-white text-primary text-weight-bold",
        style: "border: 4px solid #ea4747",
      },
    ]);
    const scrollPageTo = (navEl) => {
      if (navEl) {
        let element = document.querySelector(`${navEl}`);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return {
      refHead,
      elevated,
      toolbarClass,
      topNavMenu,
      scrollPageTo,
      lang,
    };
  },
};
</script>

<style>
.topToolBar {
  transition: all 0.3s ease-in-out;
}
</style>

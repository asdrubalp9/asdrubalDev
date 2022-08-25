<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="transparent fixed-top">
      <q-toolbar>
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
        <q-btn
          v-for="(menu, k) in topNavMenu"
          flat
          class="q-ma-md primary-text topnavbutton"
          :outline="menu.outline"
          :rounded="menu.rounded"
          :label="menu.label"
          :icon-right="menu.iconRight"
          :aria-label="menu.ariaLabel"
          :class="menu.class"
          :key="k"
          v-on:click="scrollPageTo(menu.scrollTo)"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> </q-item-label>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    const topNavMenu = ref([
      {
        label: "Sobre Drú",
        // icon: "list",
        scrollTo: "#dru",
      },
      {
        label: "Portafolio",
        // icon: "list",
        scrollTo: "#portafolio",
      },
      {
        label: "Mis Servicios",
        // icon: "list",
        scrollTo: "#servicios",
      },
      {
        label: "Contáctame",
        // icon: "list",
        scrollTo: "#contactame",
      },
      {
        label: "Descargar CV",
        iconRight: "fa-solid fa-cloud-arrow-down",
        outline: true,
        rounded: true,
        class: "bg-white text-primary",
        scrollTo: "#contactame",
      },
    ]);
    const scrollPageTo = (navEl) => {
      if (navEl) {
        let element = document.querySelector(`${navEl}`);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    };
    return {
      topNavMenu,
      leftDrawerOpen,
      scrollPageTo,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
.topnavbutton {
  transition: all 0.3s;
}
.topnavbutton:hover {
  color: var(--q-primary);
  transition: all 0.3s;
}
button.bg-white.text-primary .block {
  margin-top: 5px;
}
</style>

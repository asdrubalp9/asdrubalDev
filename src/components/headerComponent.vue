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
        :style="menu.style"
        :key="k"
        v-on:click="scrollPageTo(menu.scrollTo)"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "HeaderComponent",
  setup() {
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
        class: "bg-white text-primary text-weight-bold",
        scrollTo: "#contactame",
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
    };
  },
};
</script>

<style>
.topToolBar {
  transition: all 0.3s ease-in-out;
}
</style>

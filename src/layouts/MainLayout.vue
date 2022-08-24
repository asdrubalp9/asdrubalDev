<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="transparent">
      <q-toolbar
      >
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

        <q-toolbar-title class="primary-font text-h2 q-pt-md q-ml-xl text-weight-bold">
          Drú
        </q-toolbar-title>
        <q-space />
        <q-btn
          v-for="(menu, k) in topNavMenu"
          flat

          class="q-ma-md primary-font topnavbutton"
          :label="menu.label"
          :icon="menu.icon"
          :aria-label="menu.ariaLabel"
          :key="k"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
        </q-item-label>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)
    const topNavMenu = ref([
      {
        label: "Sobre Drú",
        // icon: "list",
        to: "#dru",
      },
      {
        label: "Portafolio",
        // icon: "list",
        to: "#portafolio",
      },
      {
        label: "Mis Servicios",
        // icon: "list",
        to: "#servicios",
      },
      {
        label: "Contáctame",
        // icon: "list",
        to: "#contactame",
      },
    ])
    return {
      topNavMenu,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>

  .topnavbutton {
    transition: all .3s;
  }
  .topnavbutton:hover{
    color: var(--q-primary);
    transition: all .3s;
  }
  
</style>
<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent />
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
import HeaderComponent from "../components/headerComponent.vue";

export default defineComponent({
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { HeaderComponent },
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

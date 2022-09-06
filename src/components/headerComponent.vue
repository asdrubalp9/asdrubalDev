<template>
  <q-header
    :elevated="elevated"
    class="transparent fixed-top"
    ref="refHead"
    id="topHeader"
  >
    <q-toolbar :class="toolbarClass" class="topToolBar">
      <q-toolbar-title
        class="primary-text text-h2 q-pt-md q-ml-xl text-weight-bold toolbarTitle"
        :class="toolbarTitleClass"
      >
        Drú
      </q-toolbar-title>
      <q-space />
      <div class="gt-md">
        <MenuIterator :options="topNavMenu" />
      </div>
      <q-btn
        flat
        dense
        round
        icon="fa-solid fa-bars"
        aria-label="Menu"
        @click="$emit('toggleLeftDrawer')"
        class="lt-md"
      />
    </q-toolbar>
  </q-header>
</template>

<script>
import { onMounted, ref } from "vue";
import scrollPageTo from "src/composables/scrollPageTo.js";
import MenuIterator from "./menuIterator.vue";

export default {
  name: "HeaderComponent",
  props: {
    topNavMenu: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["toggleLeftDrawer"],
  setup() {
    const refHead = ref(null);
    const elevated = ref(false);
    const toolbarClass = ref("");
    const toolbarTitleClass = ref("hidden");
    // detect when is scrolling down to change the class of the header
    onMounted(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
          elevated.value = true;
          toolbarClass.value = "bg-dark";
        } else {
          elevated.value = false;
          toolbarClass.value = "";
        }
        if (window.scrollY > 200) {
          toolbarTitleClass.value = "flipInX animated";
        } else {
          toolbarTitleClass.value = "hidden";
        }
      });
    });

    const toggleMenu = () => {
      // refHead.value.$refs.menu.toggle();
    };
    return {
      refHead,
      elevated,
      toolbarClass,
      scrollPageTo,
      toolbarTitleClass,
      toggleMenu,
    };
  },
  components: { MenuIterator },
};
</script>

<style>
.topToolBar {
  transition: all 0.6s ease-in-out;
}
.toolbar-cvLink .q-btn__content span {
  margin-top: 4px !important;
}
</style>

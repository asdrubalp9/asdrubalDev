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
        class="primary-text text-h2 q-pt-md q-ml-xl text-weight-bold toolbarTitle"
        :class="toolbarTitleClass"
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
          @click="toggleLang()"
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
import { computed, onMounted, ref } from "vue";
import { useLanguageStore } from "stores/language";
import { useI18n } from "vue-i18n";

export default {
  name: "HeaderComponent",
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const { t } = useI18n();
    const lang = useLanguageStore();
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
          toolbarTitleClass.value = "flipInX animate__animated";
        } else {
          toolbarTitleClass.value = "hidden";
        }
      });
    });
    function toggleLang() {
      locale.value = locale.value === "en-US" ? "es" : "en-US";
    }
    const topNavMenu = ref([
      {
        label: computed(() => t("headAbout")),
        type: "link",
        // icon: "list",
        scrollTo: "#dru",
      },
      {
        label: computed(() => t("headPortfolio")),
        type: "link",
        // icon: "list",
        scrollTo: "#portafolio",
      },
      {
        label: computed(() => t("headServices")),
        type: "link",
        // icon: "list",
        scrollTo: "#servicios",
      },
      {
        label: computed(() => t("headContact")),
        type: "link",
        // icon: "list",
        scrollTo: "#contactame",
      },
      {
        label: computed(() => t("headDownloadCV")),
        type: "download",
        iconRight: "fa-solid fa-cloud-arrow-down",
        outline: true,
        rounded: true,
        class: "bg-white text-primary text-weight-bold",
        style: "border: 4px solid #ea4747",
      },
      {
        label: computed(() => (locale.value === "en-US" ? "ES" : "US")),
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
      toggleLang,
      locale,
      toolbarTitleClass,
    };
  },
};
</script>

<style>
.topToolBar {
  transition: all 0.3s ease-in-out;
}
</style>

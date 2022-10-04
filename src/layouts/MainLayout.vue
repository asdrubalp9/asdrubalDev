<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderComponent
      :topNavMenu="topNavMenu"
      @toggleLeftDrawer="leftDrawerOpen = !leftDrawerOpen"
      @toggleLang="drawerToggleLang"
    />
    <q-drawer v-model="leftDrawerOpen" bordered class="leftDrawer">
      <div class="flex row justify-end">
        <q-btn
          flat
          icon="fa-solid fa-arrow-left"
          @click="leftDrawerOpen = false"
          class="block q-mt-md"
        />
      </div>
      <MenuIterator
        :options="topNavMenu"
        @updateLeftDrawerOpen="doScrollToPageAndToggleMenu"
      />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed, defineComponent, onMounted, ref } from "vue";
import HeaderComponent from "../components/headerComponent.vue";
import MenuIterator from "src/components/menuIterator.vue";
export default defineComponent({
  name: "MainLayout",
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const { t } = useI18n();
    const leftDrawerOpen = ref(false);
    const topNavMenu = ref([
      {
        label: computed(() => t("headAbout")),
        type: "link",
        // icon: "list",
        scrollTo: "#dru",
      },
      /*
      {
        label: computed(() => t("headPortfolio")),
        type: "link",
        // icon: "list",
        scrollTo: "#portafolio",
      },
      //*/
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
        link: computed(() => {
          return `https://docs.google.com/presentation/d/${t(
            "downloadCvLink"
          )}/export/pdf`;
        }),
        iconRight: "fa-solid fa-cloud-arrow-down",
        outline: true,
        rounded: true,
        class: "bg-white text-primary text-weight-bold toolbar-cvLink",
        style: "border: 4px solid #ea4747",
      },
      {
        label: computed(() => (locale.value === "en-US" ? "ES" : "US")),
        type: "action",
        class: "bg-white text-primary text-weight-bold",
        style: "border: 4px solid #ea4747",
      },
    ]);

    function doScrollToPageAndToggleMenu(navEl) {
      leftDrawerOpen.value = false;
      setTimeout(() => {
        let element = document.querySelector(`${navEl}`);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }

    return {
      doScrollToPageAndToggleMenu,
      topNavMenu,
      leftDrawerOpen,
      drawerToggleLang(val = null) {
        console.log("val", val);
        if (val === "inDrawer") {
          leftDrawerOpen.value = false;
        }
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  components: { HeaderComponent, MenuIterator },
});
</script>
<style>
.menuIteratorItem {
  transition: all 0.3s;
}
.menuIteratorItem:hover {
  color: var(--q-primary);
  transition: all 0.3s;
}
button.bg-white.text-primary .block {
  margin-top: 5px;
}
</style>

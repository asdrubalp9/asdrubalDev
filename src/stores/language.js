import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    currentLang: "EN",
  }),
  getters: {
    getLang: (state) => state.currentLang,
  },
  actions: {
    toggleLang() {
      // toggle currentLang from EN to RU or vice versa
      this.currentLang = this.currentLang === "EN" ? "ES" : "EN";
    },
  },
});
